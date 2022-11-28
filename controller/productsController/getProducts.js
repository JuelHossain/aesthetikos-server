const { productsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);

    const queryReducer = (prev, key) => {
      const value = req.query[key];
      if (key === "page" || key === "size") return prev;
      return { ...prev, [key]: value === "true" ? true : value === "false" ? false : value };
    };

    const initialQuery = { status: { $ne: "sold" } };

    const query = Object.keys(req.query).reduce(queryReducer, initialQuery);

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
