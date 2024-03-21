import { serialize } from "./serializer.js"
import { parse } from "./parser.js"
import { wrapPeggyParser } from "../../utils.js"

export default {
  name: "PG format",

  direction: "mixed",

  nodeTypes: "*",
  edgeTypes: "*",

  graphAttributes: false,
  nodeAttributes: true,
  edgeAttributes: true,
  visualAttributes: true,

  hierarchy: false,

  datatypes: "JSON scalars",

  parse: input => wrapPeggyParser(parse, input),
  serialize
}
