const { Schema, model, default: mongoose } = require("mongoose");

const noteSchema = new Schema(
  {
    title: { type: String },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    date: { type: Date,
    default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Note", noteSchema); //nommbre del modelo y esquema que va a usar
