// const express = require("express");
import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello, World appnguvcl!");
});

app.get("/bar", (req, res) => {
  res.send("Hello, again!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
