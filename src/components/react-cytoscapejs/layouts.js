export var layout0 = {
  name: "cose-bilkent",
  // other options
  padding: 50,
  nodeDimensionsIncludeLabels: true,
  // idealEdgeLength: 100,
  edgeElasticity: 0.1,
  // nodeRepulsion: 8500,
};

export var layout1 = {
  name: "dagre",
  nodeSep: undefined, // the separation between adjacent nodes in the same rank
  edgeSep: undefined, // the separation between adjacent edges in the same rank
  rankSep: undefined, // the separation between each rank in the layout
  rankDir: undefined, // 'TB' for top to bottom flow, 'LR' for left to right,
  align: undefined, // alignment for rank nodes. Can be 'UL', 'UR', 'DL', or 'DR', where U = up, D = down, L = left, and R = right
  acyclicer: undefined, // If set to 'greedy', uses a greedy heuristic for finding a feedback arc set for a graph.
  // A feedback arc set is a set of edges that can be removed to make a graph acyclic.
  ranker: undefined, // Type of algorithm to assign a rank to each node in the input graph. Possible values: 'network-simplex', 'tight-tree' or 'longest-path'
  minLen: function (edge) {
    return 1;
  }, // number of ranks to keep between the source and target of the edge
  edgeWeight: function (edge) {
    return 1;
  }, // higher weight edges are generally made shorter and straighter than lower weight edges

  // general layout options
  fit: true, // whether to fit to viewport
  padding: 30, // fit padding
  spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
  animate: false, // whether to transition the node positions
  animateFilter: function (node, i) {
    return true;
  }, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  transform: function (node, pos) {
    return pos;
  }, // a function that applies a transform to the final node position
  ready: function () {}, // on layoutready
  stop: function () {}, // on layoutstop
};

export var layout2 = {
  name: "cose",
  ready: function () {},
  stop: function () {},
  animate: true,
  animationEasing: undefined,
  animationDuration: undefined,
  animateFilter: function (node, i) {
    return true;
  },
  animationThreshold: 250,
  refresh: 20,
  fit: true,
  padding: 30,
  boundingBox: undefined,
  nodeDimensionsIncludeLabels: false,
  randomize: false,
  componentSpacing: 40,
  nodeRepulsion: function (node) {
    return 2048;
  },
  nodeOverlap: 4,
  edgeElasticity: function (edge) {
    return 32;
  },
  nestingFactor: 1.2,
  gravity: 1,
  numIter: 1000,
  initialTemp: 1000,
  coolingFactor: 0.99,
  minTemp: 1.0,
};

export var layout3 = {
  name: "breadthfirst",
  fit: true, // whether to fit the viewport to the graph
  directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30, // padding on fit
  circle: false, // put depths in concentric circles if true, put depths top down if false
  grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: undefined, // the roots of the trees
  maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
  depthSort: undefined, // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled,
  animateFilter: function (node, i) {
    return true;
  }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: undefined, // callback on layoutready
  stop: undefined, // callback on layoutstop
  transform: function (node, position) {
    return position;
  }, // transform a given node position. Useful for changing flow direction in discrete layouts
};

export var layout4 = {
  name: "grid",
};

export var layout5 = {
  name: "random",
};
