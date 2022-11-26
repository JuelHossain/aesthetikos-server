const { ObjectId } = require("mongodb");
const { ordersCollection } = require("../../db/collections");

const sendError = require("../../lib/sendError");

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = req.body;
    const filter = { _id: ObjectId(id) };

    const updatedDoc = {
      $set: updatedOrder
    };

    const result = await ordersCollection.updateOne(filter, updatedDoc);
    res.send(result);
  } catch (err) {
    sendError(res, err, "Updating a order was not successfull");
  }
};

module.exports = updateOrder;
