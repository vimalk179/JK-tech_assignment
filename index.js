// index.js

const app = require('./app');
const dotenv = require('dotenv');


dotenv.config();

const PORT = process.env.PORT || 3000;


const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

process.on('SIGINT', exitHandler); // Ctrl+C
process.on('SIGTERM', exitHandler); // "kill" command
