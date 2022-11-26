const sendError = (res, error, message = "There was a server side error", code = 500) => {
  res.status(code).send(message);
  console.log(error);
};
module.exports = sendError;
