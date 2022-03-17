import React from "react";
import { Handle } from "react-flow-renderer";

var handleStlye = {
  borderStyle: "solid",
  borderRadius: 0,
  backgroundColor: "rgb(185, 185, 185)",
  width: 1,
  height: 1,
};

const CircleNode = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "7px",
        borderRadius: "25px",
        borderWidth: "medium",
        borderColor: "rgb(100, 100, 100)",
        borderStyle: "solid",
      }}
    >
      <Handle
        type="target"
        position="top"
        id={`${data.id}.top`}
        style={handleStlye}
      />
      <Handle
        type="source"
        position="bottom"
        id={`${data.id}.bottom`}
        style={handleStlye}
      />

      <Handle
        type="target"
        position="left"
        id={`${data.id}.left`}
        style={handleStlye}
      />
      <div id={data.id}>{data.label}</div>
      <Handle
        type="source"
        position="right"
        id={`${data.id}.right`}
        style={handleStlye}
      />
    </div>
  );
};

export const nodeTypes = {
  circle: CircleNode,
};
