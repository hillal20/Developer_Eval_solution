const express = require("express");
const server = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { allData } = require("./allMovies/allmovies");

server.use(bodyParser.json());
server.use(cors());

allData();
server.listen(port, () => {
  console.log(`=== server is running on port ${port} ====`);
});
