//import express from "express";
const express = require("express");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
  res.send("Index");
});
router.get("/about", (req, res) => {
  res.send("About");
});
module.exports = router;
