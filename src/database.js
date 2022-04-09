//import mongoose from "mongoose";
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://maproxa:mauriciorosa25@maproxa.i5mzq.mongodb.net/MapRoxa?retryWrites=true&w=majority"
  )
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));
