const { Router } = require("express");
const {
  getAllNotes,
  createNote,
  getOneNote,
  deleteNote,
  updateNote,
} = require("../controllers/notes.controllers");
const { updateOne } = require("../models/Note");

const router = Router();

router.route("/")
    .get(getAllNotes)
    .post(createNote);

router.route("/:id")
    .get(getOneNote)
    .delete(deleteNote)
    .put(updateNote)
module.exports = router;
