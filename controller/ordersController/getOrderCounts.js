const { ObjectId } = require("mongodb");
const { ordersCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await ordersCollection.findOne(query);
    res.send(result);
  } catch (err) {
    sendError(res, err, "getting a single order was not successfull");
  }
};

module.exports = getOrder;
