const { productsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);
    const { cat, email } = req.query;
    const query = {};
    if (cat) Object.assign(query, { cat });
    if (email) Object.assign(query, { createdBy: email });

    const cursor = productsCollection.find(query).sort({ createdAt: -1 });

    let products;

    if (page || size) {
      products = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
    } else {
      products = await cursor.toArray();
    }

    res.send(products);
  } catch (err) {
    sendError(res, err, "getting products was not successfull");
  }
};

module.exports = getProducts;
