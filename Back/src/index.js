const express = require("express");
const server = express();
const routes = require("./routes/indexRoutes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { conn } = require("../src/database");
const cors = require("cors");

//midleweares
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
server.use(routes);

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3002, () => {
    console.log("Server on port 3002");
  });
});
