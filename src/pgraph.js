import fs from "fs"
import { pgformat } from "./formats.js"
import { GraphTarget, StreamTarget } from "./target.js"
import { addIdProperty, addHtmlSummary, scaleSpatial } from "./transform.js"
import { warner } from "./filter.js"

pgformat.pg.name += " (default source format)"
pgformat.jsonl.name += " (default target format)"

// Read entire source to string
const readStream = async source => {
  const chunks = []
  for await (const chunk of source) {
    chunks.push(chunk)
  }
  return chunks.join("")
}

// Convert source stream to target
export async function pgraph(source, target, opts) {
  // alias
  if (opts.from === "ndjson") {opts.from = "jsonl"}
  if (opts.to === "ndjson") {opts.to = "jsonl"}
  const from = pgformat[opts.from || "pg"]
  const to = pgformat[opts.to || "jsonl"]

  if (!from?.parse) {
    throw new Error(`Unknown source format: ${opts.from}`)
  }
  if (!to?.serialize) {
    throw new Error(`Unknown target format: ${opts.to}`)
  }

  if (typeof source === "string") {
    source = fs.createReadStream(source)
  }

  const multi = to.serialize.multi
  const database = to.serialize.database
  if (!database) { // target is a (multi)stream
    if (typeof target === "string") {
      if (!multi) {
        target = fs.createWriteStream(target)
      }
    } else if (multi) {
      target = new StreamTarget(target)
    }
  }

  const warn = opts.quiet ? undefined : warner

  // read graph from source

  var graph = from.parse(await readStream(source), warn)
  if (graph instanceof Promise) {
    graph = await graph
  }

  // optionally modify graph

  if (opts.id !== undefined) {
    addIdProperty(graph, opts.id) 
  }

  if (opts.html) {
    addHtmlSummary(graph, to)
  }

  if (opts.scale > 0) {
    scaleSpatial(graph, opts.scale)
  }

  // send graph to target

  if (typeof target === "string" || target instanceof GraphTarget) {
    to.serialize(graph, target, { ...opts, warn })
  } else {
    target.write(to.serialize(graph, { ...opts, warn }))
  }
}
