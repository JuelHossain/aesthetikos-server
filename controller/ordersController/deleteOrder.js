const { ObjectId } = require("mongodb");
const { ordersCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await ordersCollection.deleteOne(query);
    res.send(result);
  } catch (err) {
    sendError(res, err, "deleting a order product was not successfull");
  }
};

module.exports = deleteOrder;
