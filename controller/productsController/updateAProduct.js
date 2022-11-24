const { ObjectId } = require("mongodb");
const { productsCollection } = require("../../db/collections");

const sendError = require("../../lib/sendError");

// this api update a product based on a id

const updateAProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = req.body;
    const filter = { _id: ObjectId(id) };

    const updatedDoc = {
      $set: updatedService
    };

    const result = await productsCollection.updateOne(filter, updatedDoc);
    res.send(result);
  } catch (err) {
    sendError(res, err, "Updating a product was not successfull");
  }
};

module.exports = updateAProduct;
