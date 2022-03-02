const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const mongodb = require('./src/config/mongodb');
const postgres = require('./src/config/postgres');
const route = require('./src/routers/index');
const port = 3000;

const db = "";
switch (db) {
  case "mongodb":
    mongodb.connect();
    break;
  case "postgres":
    postgres.sync();
    break;
  default:
    mongodb.connect();
    postgres.sync();
    break;
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
route(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});