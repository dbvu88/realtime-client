import io from "socket.io-client";
require("dotenv").config();

const url = process.env.REACT_APP_SOCKET;
console.log(url);
const socket = io("http://localhost:8000/");

const subscribeToTimer = cb => {
  socket.on("timer", timestamp => cb(timestamp));
  socket.emit("subscribeToTimer", 1000);
};

const subscribeToDrawings = cb => {
  socket.on("drawing", cb);
  socket.emit("subscribeToDrawings");
};

const createDrawing = name => {
  socket.emit("createDrawing", { name });
};

const publishLine = ({ drawingId, line }) => {
  socket.emit("publishLine", { drawingId, line });
};

export { subscribeToTimer, subscribeToDrawings, createDrawing, publishLine };
