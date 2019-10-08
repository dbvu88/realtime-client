import React, { Component } from "react";
import { Stage, Layer, Line, Text } from "react-konva";

class DrawingCanvas extends Component {
  state = {
    lines: []
  };

  handleMouseDown = () => {
    console.log("mouseDown");
    this._drawing = true;

    this.setState({
      lines: [...this.state.lines, []]
    });
  };

  handleMouseUp = () => {
    console.log("mouseUp");
    this._drawing = false;
  };

  handleMouseMove = e => {
    console.log("mouseMove");
    if (!this._drawing) {
      return;
    }

    const stage = this.stageRef.getStage();
    console.dir(stage);
    const point = stage.getPointerPosition();
    const { lines } = this.state;
    const lastLine = lines[lines.length - 1];
    lastLine.push([point.x, point.y]);
    this.setState({ lines });
  };

  render() {
    const { selectedDrawing } = this.props;
    return selectedDrawing ? (
      <div className="DrawingCanvas">
        <div className="DrawingCanvas-title">{selectedDrawing.name}</div>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onContentMousedown={this.handleMouseDown}
          onContentMousemove={this.handleMouseMove}
          onContentMouseup={this.handleMouseUp}
          ref={node => {
            this.stageRef = node;
          }}
        />
      </div>
    ) : null;
  }
}

export default DrawingCanvas;
