import React, { Component } from "react";
import CytoscapeComponent from "react-cytoscapejs";

import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";
import dagre from "cytoscape-dagre";

import elements from "./data";
import cytoscapeStylesheet from "./stylesheet";
import * as layouts from "./layouts";

import "../styles.css";

Cytoscape.use(COSEBilkent);
Cytoscape.use(dagre);

class CytoscapeJSGraph extends Component {
  state = {
    w: 0,
    h: 0,
    elements: [],
    layout: layouts.layout0,
  };

  componentDidMount = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
    });

    this.setState({
      elements: elements,
      layout: layouts.layout1,
    });
  };

  setUpListeners = () => {
    this.cy.on("click", "node", (event) => {
      console.log(event.target);
    });
  };

  render() {
    return (
      <div className="graphComponent">
        <CytoscapeComponent
          elements={this.state.elements}
          style={{ width: "100%", height: "100%" }}
          cy={(cy) => {
            this.cy = cy;
            cy.layout(this.state.layout).run();
            cy.fit();
          }}
          stylesheet={cytoscapeStylesheet}
        />
      </div>
    );
  }
}

export default CytoscapeJSGraph;
