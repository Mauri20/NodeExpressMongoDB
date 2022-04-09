//import express from "express";
const express = require("express");
const router = express.Router();
//Routes
router.get("/notes", (req, res) => {
  res.send("User Notes");
});
router.get("/", (req, res) => {
  res.send("Index");
});
module.exports = router;
