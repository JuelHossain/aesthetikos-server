const client = require("./client");

const db = client.db("aesthetikos");
module.exports = {
  usersCollection: db.collection("users"),
  productsCollection: db.collection("products"),
  ordersCollection: db.collection("orders")
};
