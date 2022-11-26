const generateToken = require("../../lib/generateToken");
const sendError = require("../../lib/sendError");

const sendToken = async (req, res) => {
  try {
    const { user } = req.body;
    const accessToken = await generateToken(user);
    res.send({ accessToken });
  } catch (err) {
    sendError(res, err, "generating token was not successfull");
  }
};

module.exports = sendToken;
