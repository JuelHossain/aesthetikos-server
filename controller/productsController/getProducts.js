const { productsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);
    const query = { status: { $ne: "sold" } };
    Object.keys(req.query).forEach((key) => {
      Object.assign(query, { [key]: req.query[key] });
    });

    const cursor = productsCollection.aggregate([
      { $match: query },
      { $sort: { createdAt: -1 } },
      { $lookup: { from: "users", localField: "createdBy", foreignField: "email", as: "user" } },
      { $match: { user: { $ne: [] } } },
      {
        $unset: ["user"]
      }
    ]);

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
