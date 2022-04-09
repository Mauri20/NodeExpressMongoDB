//import express from "express";
const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
//Routes
router.get("/notes/add", (req, res) => {
  res.render("notes/newNote");
});
router.post("/notes/newNotes", async (req, res) => {
  const { title, description } = req.body;
  console.log("Titulo: ", title, " Nota: ", description);

  const errors = [];
  if (!title) {
    errors.push({ text: "Escriba un titulo" });
  }
  if (!description) {
    errors.push({ text: "Escriba una descripcion" });
  }
  if (errors.length > 0) {
    res.render("notes/newNote", { errors, title, description });
  } else {
    const newNote = new Note({ title, description });
    await newNote.save();
    res.redirect("/notes");
  }
});
router.get("/notes", (req, res) => {
  res.send("Index");
});

module.exports = router;
