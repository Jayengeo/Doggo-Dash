export default (io, socket) => {
  const createdMessage = (msg) => {
    console.log("Message Received:", msg);
    socket.broadcast.emit("newIncomingMessage", msg);
  };

  socket.on("createdMessage", createdMessage);
};
