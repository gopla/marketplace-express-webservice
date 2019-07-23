const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader ? bearerHeader.split(" ")[1] : undefined;
  if (token) {
    jwt.verify(token, "ayoKerja", (err, payload) => {
      if (err) throw err;
      req.user = payload;
      next();
    });
  } else {
    res.sendStatus(403);
  }
};
