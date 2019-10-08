import React, { Component } from "react";
import "./App.css";
import DrawingController from "./DrawingController";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Our awesome drawing app</h2>
        </div>
        <DrawingController />
      </div>
    );
  }
}

export default App;
