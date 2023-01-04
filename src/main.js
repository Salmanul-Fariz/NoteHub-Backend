// Require packages
const express = require('express');

// Require functions
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const app = express();

async function StartServer() {
  // Connect database
  await databaseConnection();

  // Connect Application
  await expressApp(app);

  // Listening port
  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
      console.log(err);
    });
}

StartServer();
