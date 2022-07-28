const userCtrls = {};
const UserModel = require("../models/User");

userCtrls.getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
};

userCtrls.createUser = async (req, res) => {
  const { username } = req.body;

  const checkName = await UserModel.findOne({ username: username });
  if (checkName !== null) {
    res.status(400).send("nombre en uso");
    return;
  }

  const newUser = new UserModel({
    username,
  });

  await newUser.save();
  res.send(newUser);
};

userCtrls.deleteUser = async (req, res) => {
  const { id } = req.params;

  await UserModel.findByIdAndDelete(id);
  res.send("Eliminado correctamente");
};

userCtrls.getOneUser = async (req, res) => {
  const { id } = req.params;

  const oneUser = await UserModel.findById(id);
  res.send(oneUser);
};

module.exports = userCtrls;
