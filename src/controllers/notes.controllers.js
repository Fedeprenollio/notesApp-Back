const notesCtrls = {};
const NoteModel = require("../models/Note");

notesCtrls.getAllNotes = async (req, res) => {
  const allNotes = await NoteModel.find();
  res.send(allNotes);
};
notesCtrls.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new NoteModel({
    title,
    content,
    date,
    author,
  });
  await newNote.save();
  res.send(newNote);
};

notesCtrls.getOneNote = async (req, res) => {
  const { id } = req.params;
  const oneNote = await NoteModel.findById(id);
  res.send(oneNote);
};

notesCtrls.deleteNote = async (req, res) => {
  const { id } = req.params;
  await NoteModel.findByIdAndDelete(id);
  res.send("Nota eliminada");
};

notesCtrls.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, date, author } = req.body;
   await NoteModel.findByIdAndUpdate(id, {
    title,
    content,
    date,
    author,
  });
  res.send("Actualizado")
};
module.exports = notesCtrls;
