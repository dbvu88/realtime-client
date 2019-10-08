import React, { Component } from "react";

const DrawingCanvas = props => {
  const { selectedDrawing } = props;
  return selectedDrawing ? (
    <div className="DrawingCanvas">
      <div className="DrawingCanvas-title">{selectedDrawing.name}</div>
    </div>
  ) : null;
};

export default DrawingCanvas;
