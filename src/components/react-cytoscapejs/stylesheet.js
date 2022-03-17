/* 
DOCS
https://js.cytoscape.org/#style 
*/

var cytoscapeStylesheet = [
  {
    selector: 'node[type="main"]',
    style: {
      "background-color": "#D4E5F7",
      width: "label",
      height: "label",
      padding: "10px",
      shape: "polygon",
      "shape-polygon-points": " -0.8, -1, 0.8, -1, 1, 1, -1, 1",
      "border-width": "1",
      "border-style": "solid",
      "border-color": "#4478BE",
    },
  },
  {
    selector: 'node[type="metric"]',
    style: {
      "background-color": "white",
      width: "label",
      height: "label",
      padding: "4px",
      shape: "rectangle",
      "border-width": "1",
      "border-style": "solid",
      "border-color": "grey",
    },
  },
  {
    selector: 'node[type="rel"]',
    style: {
      "background-color": "white",
      width: "10",
      height: "10",
      shape: "circle",
      "border-width": "1",
      "border-style": "solid",
      "border-color": "black",
    },
  },
  {
    selector: "node[label]",
    style: {
      label: "data(label)",
      "font-size": "12",
      color: "black",
      "text-halign": "center",
      "text-valign": "center",
    },
  },

  {
    selector: "edge",
    style: {
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
      width: 1.0,
      "line-color": "black",
      "target-arrow-color": "black",
    },
  },
];

export default cytoscapeStylesheet;
