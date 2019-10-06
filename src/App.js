import React, { Component } from "react";
import "./App.css";
import { subscribeToTimer } from "./api";
import DrawingForm from "./DrawingForm";
class App extends Component {
  // constructor(props) {
  //   super(props);

  //   subscribeToTimer(timestamp => {
  //     this.setState({
  //       timestamp
  //     });
  //   });

  //   this.state = {
  //     timestamp: "none"
  //   };
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Our awesome drawing app</h2>
        </div>
        {/* timestamp: {this.state.timestamp} */}
        <DrawingForm />
      </div>
    );
  }
}

export default App;
