import React from "react";

const DrawingList = props => {
  const drawingList = props.drawings;

  return (
    <ul className="DrawList">
      {drawingList.map(drawing => (
        <li className="DrawList-item" key={drawing.id}>
          {drawing.name}
        </li>
      ))}
    </ul>
  );
};

export default DrawingList;
