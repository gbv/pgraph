export default {
  name: "igraph",
  url: "https://igraph.org/",
  datatypes: "bool|number|string",
  direction: "uniform",
  // TODO: ony one attribute (edge/graph/node)!
  edgeAttributes: true,
  edgeIdentifier: false, // numbered
  edgeName: false,
  edgeTypes: false,
  edgeWeight: false,
  graphAttributes: true,
  graphLabels: false,
  hierarchy: false,
  hyperEdges: false,
  idPattern: /^[1-9][0-9]*$/,
  labelPattern: false,
  attributePattern: /x/,
  loops: true,
  multiEdges: true,
  nodeAttributes: true,
  nodeName: false,
  nodeTypes: false,
  visualAttributes: true, // https://igraph.org/python/tutorial/0.9.8/tutorial.html#vertex-attributes-controlling-graph-plots
}
