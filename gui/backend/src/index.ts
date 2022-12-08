import {exec} from 'child_process';
import * as express from 'express';
import path = require('path');

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  // render the index template
  res.sendFile(path.join(__dirname, '../../../frontend/index.html'));
});

app.post('/start', (req, res) => {
  // Exec the CLI validator start command
  exec('operator-cli start', (err, stdout, stderr) => {
    console.log('operator-cli start result: ', err, stdout, stderr);
    res.end();
  });
  console.log('executing operator-cli start...');
});

app.post('/stop', (req, res) => {
  // Exec the CLI validator stop command
  exec('operator-cli stop', (err, stdout, stderr) => {
    console.log('operator-cli stop result: ', err, stdout, stderr);
    res.end();
  });
  console.log('executing operator-cli stop...');
});

app.post('/status', (req, res) => {
  // Exec the CLI validator status command
  exec('operator-cli status', (err, stdout, stderr) => {
    console.log('operator-cli status result: ', err, stdout, stderr);
    res.end();
  });
  console.log('executing operator-cli status...');
});

app.post('/gui/status', (req, res) => {
  // Exec the CLI gui status command
  exec('operator-cli gui status', (err, stdout, stderr) => {
    console.log('operator-cli gui status result: ', err, stdout, stderr);
    res.end();
  });
  console.log('executing operator-cli gui status...');
});

// start the express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
