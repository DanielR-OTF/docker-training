const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://db/mydatabase").catch((err) => console.error(err));

const app = express();

app.get("/", (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  const connectionStatus = isConnected ? "connected" : "disconnected";
  res.send(`Connection status: ${connectionStatus}`);
});

app.listen(3000);
