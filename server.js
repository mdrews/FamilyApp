// Require
const bodyParser = require('body-parser');
const chalk = require('chalk');
const express = require('express');
const mongoose = require('mongoose');
// Files
const keys = require('./config/keys');

// Middleware
const app = express();
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(chalk.magenta(`MongoDB connected`)))
  .catch(error => console.log(chalk.red(`Error connecting to MongoDB: ${error}`)));

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server alive and listening on port ${chalk.blue(port)}`);
});