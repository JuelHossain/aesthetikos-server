const { usersCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getAUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await usersCollection.findOne({ email });
    res.send(result);
  } catch (err) {
    sendError(res, err, "updating a user was not successfull");
  }
};
module.exports = getAUser;
