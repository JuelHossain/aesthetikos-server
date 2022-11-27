const client = require("./client");

const db = client.db("mobile-reseller");
module.exports = {
  usersCollection: db.collection("users"),
  productsCollection: db.collection("products"),
  ordersCollection: db.collection("orders")
};
