const express = require("express");
const dotenv = require("dotenv");

//Load Env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 3005;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on this port Port ${PORT}`
  )
);
