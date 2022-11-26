// this api adds a product on the product collection

const { ordersCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const createOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    const result = await ordersCollection.insertOne(newOrder);
    res.send(result);
  } catch (err) {
    sendError(res, err, "adding a  order  was not successfull");
  }
};

module.exports = createOrder;
