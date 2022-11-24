const jwt = require("jsonwebtoken");
const { usersCollection } = require("../../db/collections");
const { default: sendError } = require("../../lib/sendError");

const authenticate = async (req, res) => {
  try {
    const user = req.body;
    const filter = { email: user.email };
    const newUser = { $set: user };
    const options = { upsert: true };

    await usersCollection.updateOne(filter, newUser, options);

    const accessToken = await jwt.sign(newUser, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    res.send({ accessToken });
  } catch (err) {
    sendError(res, err, "authenticating user was not successful");
  }
};

module.exports = authenticate;
