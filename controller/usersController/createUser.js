const { usersCollection } = require("../../db/collections");
const generateToken = require("../../lib/generateToken");
const sendError = require("../../lib/sendError");

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const filter = { email: user.email };
    const newUser = { $set: user };
    const options = { upsert: true };

    const dbRes = await usersCollection.updateOne(filter, newUser, options);

    const accessToken = await generateToken(user);

    res.send({ accessToken, dbRes });
  } catch (err) {
    sendError(res, err, "Creating user was not successfull");
  }
};

module.exports = createUser;
