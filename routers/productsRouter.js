const express = require("express");
const {
  getProducts,
  addAProduct,
  getProductsCount,
  getAProduct,
  deleteAProduct,
  updateAProduct
} = require("../controller/productsController");

const verifyUser = require("../middlewares/verifyUser");

const productsRouter = express.Router();

productsRouter.route("/").get(getProducts).post(verifyUser, addAProduct);

productsRouter.get("/count", getProductsCount);

productsRouter
  .route("/:id")
  .get(getAProduct)
  .patch(verifyUser, updateAProduct)
  .delete(verifyUser, deleteAProduct);

module.exports = productsRouter;
