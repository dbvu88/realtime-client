import React, { Component } from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import { publishLine } from "../api";

class DrawingCanvas extends Component {
  state = {
    lines: []
  };

  handleMouseDown = () => {
    this._drawing = true;
    let { lines } = this.state;
    // console.log(lines);
    lines = [...lines, []];
    this.setState({
      lines
    });
  };

  handleMouseUp = () => {
    // console.log("mouseUp");
    this._drawing = false;
  };

  handleMouseMove = e => {
    // console.log("mouseMove");
    if (!this._drawing) {
      return;
    }

    const stage = this.stageRef.getStage();
    const point = stage.getPointerPosition();
    const { lines } = this.state;
    const lastIndex = lines.length - 1;
    // spread operation is faster than push
    lines[lastIndex] = [...lines[lastIndex], point.x, point.y];
    this.setState({ lines });
    const { selectedDrawing } = this.props;
    console.log(selectedDrawing);

    publishLine({ drawingId: selectedDrawing.id, line: lines[lastIndex] });
  };

  render() {
    const { selectedDrawing } = this.props;
    const { lines } = this.state;
    return selectedDrawing ? (
      <div className="DrawingCanvas">
        <div className="DrawingCanvas-title">{selectedDrawing.name}</div>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onContentMousedown={this.handleMouseDown}
          onContentMousemove={this.handleMouseMove}
          onContentMouseup={this.handleMouseUp}
          // use ref to interact with DOM in react
          ref={node => {
            this.stageRef = node;
          }}
        >
          <Layer>
            <Text text="Draw something ..." />
            {lines.map((line, i) => {
              return <Line key={i} points={line} stroke="red" />;
            })}
          </Layer>
        </Stage>
      </div>
    ) : null;
  }
}

export default DrawingCanvas;
