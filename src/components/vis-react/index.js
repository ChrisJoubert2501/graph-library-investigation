import React, { Component } from "react";
import Graph from "vis-react";

import graphData from "./data";

/* 
Docs:
https://visjs.github.io/vis-network/docs/network/#options
 */

var options = {
  layout: {
    improvedLayout: true,
    hierarchical: {
      enabled: true, //change to true to see the other graph
      direction: "UD",
      levelSeparation: 150,
      nodeSpacing: 250,
      sortMethod: "directed",
    },
  },
  edges: {
    color: "#000000",
  },
  interaction: { hoverEdges: true },
  physics: { enabled: false },
};

var events = {
  select: function (event) {
    var { nodes, edges } = event;
  },
};

var style = { width: "100%", height: "100%" };

class VisJSGraph extends Component {
  render() {
    return (
      <div className="graphComponent">
        <Graph
          graph={graphData}
          options={options}
          events={events}
          style={style}
          getNetwork={this.getNetwork}
          getEdges={this.getEdges}
          getNodes={this.getNodes}
          vis={(vis) => (this.vis = vis)}
        />
      </div>
    );
  }
}

export default VisJSGraph;
