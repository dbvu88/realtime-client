import React, { Component } from "react";
import "./App.css";
import { subscribeToTimer } from "./api";
import DrawingForm from "./DrawingForm";
import DrawingList from "./DrawingList";
import { subscribeToDrawings } from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    // subscribeToTimer(timestamp => {
    //   this.setState({
    //     timestamp
    //   });
    // });

    subscribeToDrawings(drawing => {
      this.setState(prevState => ({
        drawings: [...prevState.drawings, drawing]
      }));
    });
  }

  state = {
    drawings: []
  };

  render() {
    const { drawings } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Our awesome drawing app</h2>
        </div>
        {/* timestamp: {this.state.timestamp} */}
        <DrawingForm />
        <DrawingList {...{ drawings }} />
      </div>
    );
  }
}

export default App;
