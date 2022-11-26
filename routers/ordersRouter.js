const express = require("express");
const {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
  getOrderCounts
} = require("../controller/ordersController");

const verifyUser = require("../middlewares/verifyUser");

const ordersRouter = express.Router();

ordersRouter.route("/").get(getOrders).post(verifyUser, createOrder);

ordersRouter.get("/count", getOrderCounts);

ordersRouter
  .route("/:id")
  .get(getOrder)
  .patch(verifyUser, updateOrder)
  .delete(verifyUser, deleteOrder);

module.exports = ordersRouter;
