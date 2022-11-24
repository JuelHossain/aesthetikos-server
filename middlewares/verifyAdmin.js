const sendError = require("../lib/sendError");
const verifyUser = require("./verifyUser");

const verifyAdmin = async(req, res, next) => {
  verifyUser(req, res, () => {
    try {
      next();
    } catch (error) {
      sendError(res, error, "admin verification failed");
    }
  });
};

module.exports = verifyAdmin;
