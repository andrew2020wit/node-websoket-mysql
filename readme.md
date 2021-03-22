# Node.js + websocket(ws) + MySQL (Sequelize)

Запись входящих сообщений (ws, text) в MySQL

1. index.html отправляет сообщения через setInterval, сразу после открытия (с пользователем не взаимодействует)
2. сервер при старте показывает все прежние сообщения, и записывает новые в MySQL

## based on

https://github.com/andrew2020wit/mini-projects/tree/main/web-socket/node-ws
