const WebSocket = require("ws");

const Sequelize = require("sequelize");
const sequelize = new Sequelize("logdb", "root", "12345", {
  dialect: "mysql",
  host: "localhost",
  port: "3306",
});

const InputMessage = sequelize.define("input", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => console.log(err));

InputMessage.findAll({ raw: true })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.log(err));

const webSocketServer = new WebSocket.Server({ port: 8081 });

webSocketServer.on("connection", function connection(webSocket) {
  webSocket.on("message", function incoming(message) {
    console.log("received: %s", message);

    InputMessage.create({
      message: message,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  });
});
