const jwt = require("jsonwebtoken");
const sendError = require("../lib/sendError");

const verifyUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({ message: "unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).send({ message: "forbidden" });
      }
      req.decoded = decoded;
      console.log(decoded);
      next();
    });
  } catch (error) {
    sendError(res, error, "user authentication was not completed successfully there was an error");
  }
};
module.exports = verifyUser;
