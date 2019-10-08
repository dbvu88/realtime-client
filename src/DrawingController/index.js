import React, { Component, useState } from "react";
import { subscribeToDrawings } from "../api";

import DrawingForm from "./DrawingForm";
import DrawingList from "./DrawingList";
import DrawingCanvas from "./DrawingCanvas";

class DrawingController extends Component {
  constructor(props) {
    super(props);

    subscribeToDrawings(drawing => {
      this.setState(prevState => ({
        drawings: [...prevState.drawings, drawing]
      }));
    });
  }

  state = {
    drawings: [],
    selectedDrawing: null
  };

  selectDrawing(drawing) {
    this.setState({
      selectDrawing: drawing
    });
  }

  render() {
    const { drawings } = this.state;

    return (
      <div>
        <DrawingForm />
        <DrawingList {...{ drawings }} />
      </div>
    );
  }
}

export default DrawingController;
