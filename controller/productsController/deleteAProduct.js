const { ObjectId } = require("mongodb");
const { productsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const deleteAProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await productsCollection.deleteOne(query);
    res.send(result);
  } catch (err) {
    sendError(res, err, "deleting a single product was not successfull");
  }
};

module.exports = deleteAProduct;
