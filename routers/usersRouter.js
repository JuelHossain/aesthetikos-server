const express = require("express");
const {
  getUsers,
  createUser,
  sendToken,
  updateAUser,
  deleteAUser,
  getAUser
} = require("../controller/usersController");

const usersRouter = express.Router();

usersRouter.route("/").get(getUsers).post(sendToken).put(createUser);

usersRouter.route("/:email").get(getAUser).patch(updateAUser).delete(deleteAUser);

module.exports = usersRouter;
