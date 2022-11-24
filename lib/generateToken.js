const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
  try {
    if (user) {
      const accessToken = await jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1d"
      });
      return accessToken;
    }
    console.log("please give a valid user");
  } catch (err) {
    console.log("generating access token failed", err);
  }
};

module.exports = generateToken;
