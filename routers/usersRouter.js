const express = require("express");
const authenticate = require("../controller/usersController/authenticate");
const deleteAUser = require("../controller/usersController/deleteAUser");
const getAUser = require("../controller/usersController/getAUser");
const getUsers = require("../controller/usersController/getUsers");
const updateAUser = require("../controller/usersController/updateAUser");

const usersRouter = express.Router();

usersRouter.route("/").get(getUsers).put(authenticate);

usersRouter.route("/:email").get(getAUser).patch(updateAUser).delete(deleteAUser);

module.exports = usersRouter;
