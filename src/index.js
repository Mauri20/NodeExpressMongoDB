/*import express from "express";
import { engine } from "express-handlebars";
import colors from "colors";
import methodOverride from "method-override";
import session from "express-session";
*/
const express = require("express");
const { engine } = require("express-handlebars");
const colors = require("colors");
const methodOverride = require("method-override");
const session = require("express-session");
//HTTP, DB Server Initializations
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", "src/views");
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: "src/views/layouts",
    partialsDir: "src/views/partials",
    extname: ".hbs",
  })
);
app.set("engine", ".hbs");
//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "misecreto",
    resave: true,
    saveUninitialized: true,
  })
);

//Global Vars

//Routes
app.use(require("./routes/index"));
app.use(require("./routes/users"));
app.use(require("./routes/notes"));
//Static Files
app.use(express.static("src/public"));
//Server Start
app.listen(app.get("port"), () => {
  console.log("Server on Port: ".magenta, app.get("port"));
});
