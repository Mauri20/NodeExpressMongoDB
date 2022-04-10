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
    req.flash("success_msg", "Nota Agregada con éxito");
    res.redirect("/notes");
  }
});
router.get("/notes", async (req, res) => {
  const notes = await Note.find().lean().sort({ date: "desc" });
  res.render("notes/allNotes", { notes });
});
router.get("/notes/edit/:id", async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  res.render("notes/editNote", { note });
});
router.put("/notes/editNote/:id", async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Nota actualizada con éxito");
  res.redirect("/notes");
});
router.delete("/notes/delete/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("error_msg", "Nota eliminada");
  res.redirect("/notes");
});
module.exports = router;
