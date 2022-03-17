import VisJSGraph from "./vis-react";
import CytoscapeJSGraph from "./react-cytoscapejs";
import ReactFlowGraphFn from "./react-flow-renderer";

import "./styles.css";

const App = () => {
  return (
    <>
      <h1 className="mainHeading">Graph Library Investigation</h1>
      <div className="customHeading1">
        <a href="https://js.cytoscape.org/">Cytoscape.js</a>
      </div>
      <div className="customHeading2">
        (React Component:{" "}
        <a href="https://www.npmjs.com/package/react-cytoscapejs">
          react-cytoscapejs)
        </a>
      </div>
      <div id="container">
        <div className="list1">
          <ul>
            <li>Licence: MIT</li>
          </ul>
        </div>
        <br />
        <div className="list1 list2">
          Pros:
          <ul>
            <li>Highly customisable with stylesheets</li>
            <li>Many automatic layouts</li>
            <li>Ok documentation, but many examples to work from</li>
            <li>
              Can easily handle medium sized graphs
              <br />
              (&lt;100 nodes)
            </li>
            <li>Suite of unit tests (to be investigated)</li>
          </ul>
        </div>
        <div className="list1 list2">
          Cons:
          <ul>
            <li>Nothing?</li>
          </ul>
        </div>
      </div>
      {<CytoscapeJSGraph />}
      <div className="customHeading1">
        <a href="https://reactflow.dev/">React Flow </a>
      </div>
      <div className="customHeading2"> (React Component)</div>
      <div id="container">
        <div className="list1">
          <ul>
            <li>Licence: MIT</li>
          </ul>
        </div>
        <br />
        <div className="list1 list2">
          Pros:
          <ul>
            <li>Built for React</li>
            <li>
              Many interesting built-in features:
              <br />
              Minimap, controls, background
            </li>
            <li>Support for nested graphs</li>
            <li>Good documentation</li>
            <li>Supports animation</li>
          </ul>
        </div>
        <div className="list1 list2">
          Cons:
          <ul>
            <li>
              Depends on unmaintained js library for auto layout:{" "}
              <a href="https://github.com/dagrejs/dagre">dagre</a>
              <br />
              (Last version from 2015)
            </li>
          </ul>
        </div>
      </div>
      {ReactFlowGraphFn()}
      <div className="customHeading1">
        <a href="https://visjs.org/">vis.js</a>
      </div>
      <div className="customHeading2">
        (React Component:{" "}
        <a href="https://www.npmjs.com/package/vis-react">vis-react</a>)
      </div>
      <div id="container">
        <div className="list1">
          <ul>
            <li>Licence: MIT</li>
          </ul>
        </div>
        <br />
        <div className="list1 list2">
          Pros:
          <ul>
            <li>Simple, easy to use</li>
          </ul>
        </div>
        <div className="list1 list2">
          Cons:
          <ul>
            <li>Not very customisable</li>
            <li>Hierarchy system for rendering tree-like structure</li>
          </ul>
        </div>
      </div>
      <VisJSGraph />
      <br /> <br />
      <br /> <br />
    </>
  );
};

export default App;
