import React from "react";
import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import DeviceNode from "./DeviceNode";

const nodeTypes = { device: DeviceNode };

const TopologyCanvas = ({ nodes, edges, onNodesChange, onEdgesChange }) => {
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background variant="dots" gap={20} size={1} color="#cbd5e1" />
        <Controls position="top-left" />
        <MiniMap position="bottom-right" />
      </ReactFlow>
    </div>
  );
};

export default TopologyCanvas;
