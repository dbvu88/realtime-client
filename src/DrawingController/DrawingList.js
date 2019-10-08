import React from "react";

const DrawingList = props => {
  const { drawings, selectDrawing } = props;

  return (
    <ul className="DrawingList">
      {drawings.map(drawing => (
        <li
          className="DrawingList-item"
          key={drawing.id}
          onClick={event => selectDrawing(drawing)}
        >
          {drawing.name}
        </li>
      ))}
    </ul>
  );
};

export default DrawingList;
