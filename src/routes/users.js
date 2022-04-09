//import express from "express";
const express = require("express");
const router = express.Router();
//Routes
router.get("/users/signin", (req, res) => {
  res.render("users/signin");
});
router.get("/users/signup", (req, res) => {
  res.render("users/signup");
});

module.exports = router;
