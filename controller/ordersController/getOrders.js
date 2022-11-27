const { ordersCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);
    const { email, productId } = req.query;
    const query = {};
    if (email) Object.assign(query, { bookedBy: email });
    if (productId) Object.assign(query, { productId });

    const cursor = ordersCollection.find(query).sort({ bookedAt: -1 });

    let orders;

    if (page || size) {
      orders = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
    } else {
      orders = await cursor.toArray();
    }

    res.send(orders);
  } catch (err) {
    sendError(res, err, "getting orders was not successfull");
  }
};

module.exports = getOrders;
