const { productsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getProductsCount = async (req, res) => {
  try {
    const count = await productsCollection.countDocuments();
    res.send(count);
  } catch (err) {
    sendError(res, err, "getting products count was not successfull");
  }
};

module.exports = getProductsCount;
