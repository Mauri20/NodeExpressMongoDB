const mongoose = require("mongoose");

const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, require: true },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Note", NoteSchema);
