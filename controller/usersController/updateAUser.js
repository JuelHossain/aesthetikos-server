const { usersCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

// this api update a service based on a id

const updateAUser = async (req, res) => {
  try {
    const { email } = req.params;
    const updatedUser = req.body;

    const updatedDoc = {
      $set: updatedUser
    };

    const result = await usersCollection.updateOne({ email }, updatedDoc);
    res.send(result);
  } catch (err) {
    sendError(res, err, "updating a user was not successfull");
  }
};

module.exports = updateAUser;
