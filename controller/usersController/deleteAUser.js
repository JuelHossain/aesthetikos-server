const { ObjectId } = require("mongodb");
const { usersCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const deleteAUser = async (req, res) => {
  try {
    const { email } = req.params;
    const query = { _id: ObjectId(email) };
    const result = await usersCollection.deleteOne(query);
    res.send(result);
  } catch (err) {
    sendError(res, err, "deleting a user was not successfull");
  }
};

module.exports = deleteAUser;
