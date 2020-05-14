const express = require('express');
const app = express();
const dotenv = require ('dotenv');

dotenv.config({path : './config/config.env'});

const puzzle = require('./routes/sudoko.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(puzzle);

const PORT = process.env.PORT;
app.listen(PORT, ()=> {
  console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

