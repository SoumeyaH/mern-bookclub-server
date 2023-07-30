const express = require("express");
const cors = require("cors");
require('dotenv').config()

const mongoDBConnection = require("./connection");
const routes = require("./routes");

const app = express();

mongoDBConnection()

const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

module.exports = { app };