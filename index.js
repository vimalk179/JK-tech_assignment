const http = require('https');
const fs = require('fs');
const app = require('./app');
const config = require("./config");

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
  console.log('waiting ..........')
});

