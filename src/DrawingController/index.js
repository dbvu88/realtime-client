import React, { Component, useState, useEffect } from "react";
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

  selectDrawing = drawing => {
    // console.log(drawing);
    this.setState({
      selectedDrawing: drawing
    });
  };

  render() {
    const { drawings, selectedDrawing } = this.state;
    const { selectDrawing } = this;
    // console.log(selectedDrawing);
    return (
      <div>
        {selectedDrawing ? (
          <DrawingCanvas {...{ selectedDrawing }} />
        ) : (
          <div>
            <DrawingForm />
            <DrawingList {...{ drawings, selectDrawing }} />
          </div>
        )}
      </div>
    );
  }
}

// const DrawingController = props => {
//   const [drawings, setDrawings] = useState([]);

//   useEffect(() => {
//     subscribeToDrawings(drawing => {
//       setDrawings([...drawings, drawing]);
//     });
//     return () => {
//         setDrawings()
//     };
//   });

//   return (
//     <div>
//       <DrawingForm />
//       <DrawingList {...{ drawings }} />
//     </div>
//   );
// };

export default DrawingController;
