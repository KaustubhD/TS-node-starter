// import * as express from 'express';

// const app:  = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });
// app.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(__dirname);
//   return console.log(`listening on ${port}`);
// });
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});