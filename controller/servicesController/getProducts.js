const { productsCollection } = require("../../db/collections");
const { default: sendError } = require("../../lib/sendError");

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);
    const { cat } = req.query;
    const query = cat ? { cat } : {};

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
