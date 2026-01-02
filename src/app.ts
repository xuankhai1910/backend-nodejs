// const express = require("express");
import express from "express";
import "dotenv/config";
import webRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = import.meta.dirname; //

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static files: css/images/js
app.use(express.static("public"));

//config routes
webRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`env port: `, process.env.PORT);
});
