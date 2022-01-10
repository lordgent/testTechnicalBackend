const jwt = require("jsonwebtoken");

exports.cekAuth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({
      message: "Access denied!!",
    });
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.userAuth = verified;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Invalid Token.. | Bad Request ",
    });
  }
};
