var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", function(socket) {
  console.log("a user connected");

  // when picking up a cup
  socket.on("cup pickup", function(cupId) {
    console.log(`A cup with id ${cupId} was picked up.`);
    io.emit("cupPickupReceipt", cupId);
  });

  // when dropping off a cup
  socket.on("cup dropoff", function(cupId) {
    console.log(`A cup with id ${cupId} was dropped off.`);
    io.emit("cupDropoffReceipt", cupId);
  });

  // user disconnected
  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });
});


const PORT = process.env.PORT || 8080;

http.listen(PORT, function() {
  console.log(`listening on *${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
//   console.log('Press Ctrl+C to quit.');
// });