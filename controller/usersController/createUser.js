const { usersCollection } = require("../../db/collections");
const generateToken = require("../../lib/generateToken");
const { default: sendError } = require("../../lib/sendError");

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const dbRes = await usersCollection.insertOne(user);
    const accessToken = await generateToken(user);
    res.send({ accessToken, dbRes });
  } catch (err) {
    sendError(res, err, "Creating user was not successfull");
  }
};

module.exports = createUser;
