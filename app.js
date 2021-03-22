const WebSocket = require("ws");

const webSocketServer = new WebSocket.Server({ port: 8081 });

webSocketServer.on("connection", function connection(webSocket) {
  webSocket.on("message", function incoming(message) {
    console.log("received: %s", message);
  });
  let count = 0;
  sender();
  function sender() {
    count++;
    webSocket.send(`server interval send #${count}`);
    if (count < 5) {
      setTimeout(() => sender(), 1000);
    } else {
      webSocket.close();
    }
  }
});
