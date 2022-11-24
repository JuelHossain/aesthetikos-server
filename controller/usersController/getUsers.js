const { usersCollection } = require("../../db/collections");
const { default: sendError } = require("../../lib/sendError");

const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);
    const { role } = req.query;
    const query = role ? { role } : {};
    const cursor = usersCollection.find(query);

    let users;

    if (page || size) {
      users = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
    } else {
      users = await cursor.toArray();
    }

    res.send(users);
  } catch (error) {
    sendError(res, error);
  }
};

module.exports = getUsers;
