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
const path = require("path");
const flash = require("connect-flash");
//HTTP, DB Server Initializations
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
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
app.use(flash());
//Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});
//Routes
app.use(require("./routes/index"));
app.use(require("./routes/users"));
app.use(require("./routes/notes"));
//Static Files
app.use(express.static(path.join(__dirname, "public")));
//Server Start
app.listen(app.get("port"), () => {
  console.log("Server on Port: ".magenta, app.get("port"));
});
