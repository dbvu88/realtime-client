import React, { Component } from "react";
import Canvas from "simple-react-canvas";

const DrawingCanvas = props => {
  const { drawing } = this.props.drawing;
  return drawing ? (
    <div className="DrawingCanvas">
      <div className="DrawingCanvas-title">{drawing.name}</div>
      <Canvas drawingEnable={true} />
    </div>
  ) : null;
};

export default DrawingCanvas;
