const { usersCollection } = require("../../db/collections");
const { default: sendError } = require("../../lib/sendError");

const deleteAUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await usersCollection.deleteOne({ email });
    res.send(result);
  } catch (err) {
    sendError(res, err, "deleting a user was not successfull");
  }
};

module.exports = deleteAUser;
