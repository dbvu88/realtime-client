import React, { useState } from "react";
import { createDrawing } from "../api";

const DrawingFrom = props => {
  const [drawingName, setDrawingName] = useState("");

  return (
    <div className="Form">
      <form
        onSubmit={e => {
          e.preventDefault();
          createDrawing(drawingName);
          setDrawingName("");
        }}
      >
        <input
          type="text"
          value={drawingName}
          onChange={e => setDrawingName(e.target.value)}
          placeholder="Drawing name"
          className="Form-drawingInput"
          required
        />
        <button type="submit" className="Form-drawingInput">
          Create
        </button>
      </form>
    </div>
  );
};

export default DrawingFrom;
