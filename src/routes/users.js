const { Router } = require("express");
const { getAllUsers, createUser, deleteUser, getOneUser } = require("../controllers/users.controllers");

const router = Router();

router
  .route("/")
  .get(getAllUsers)
  .post(createUser);

router.route("/:id")
    .delete(deleteUser)
    .get(getOneUser)
//     .put();
module.exports = router;
