import openSocket from "socket.io-client";
require("dotenv").config();

const url = process.env.REACT_APP_SOCKET;
const socket = openSocket(url);

const subscribeToTimer = cb => {
  socket.on("timer", timestamp => cb(timestamp));
  socket.emit("subscribeToTimer", 1000);
};

export { subscribeToTimer };
