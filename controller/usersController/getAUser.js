const { usersCollection } = require("../../db/collections");

const getAUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await usersCollection.findOne({ email });
    res.send(result);
  } catch (err) {
    const error = "getting a single user  was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};
module.exports = getAUser;
