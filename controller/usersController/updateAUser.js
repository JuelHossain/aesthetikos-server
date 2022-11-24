const { usersCollection } = require("../../db/collections");

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
    const error = "updating a user was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};

module.exports = updateAUser;
