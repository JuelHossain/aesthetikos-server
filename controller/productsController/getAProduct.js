const { ObjectId } = require("mongodb");
const { productsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getAProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await productsCollection.findOne(query);
    res.send(result);
  } catch (err) {
    sendError(res, err, "getting a single product was not successfull");
  }
};

module.exports = getAProduct;
