// this api adds a product on the product collection

const { productsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const addAProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const result = await productsCollection.insertOne(newProduct);
    res.send(result);
  } catch (err) {
    sendError(res, err, "adding a  product  was not successfull");
  }
};

module.exports = addAProduct;
