import parse from "./parser.js"
import serialize from "./serializer.js"

export default {
  name: "PG-JSONL",

  direction: "mixed",

  nodeTypes: "*",
  edgeTypes: "*",

  graphAttributes: false,
  nodeAttributes: true,
  edgeAttributes: true,
  visualAttributes: true,

  hierarchy: false,

  datatypes: "JSON scalars",

  parse, serialize
}
