const { ObjectId } = require("mongodb");
const { productsCollection } = require("../../db/collections");

const { default: sendError } = require("../../lib/sendError");

// this api update a service based on a id

const updateAProducts = async (req, res) => {
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

module.exports = updateAProducts;
