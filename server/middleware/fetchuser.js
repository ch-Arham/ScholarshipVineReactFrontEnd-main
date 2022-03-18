const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const JWT_SECRET = process.env.JWT_SECRET;

//basically to authenticate token and get user.id
const fetchuser = (req, res, next) => {
  //get a user from jwt token and id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "please authenticate with valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "please authenticate with valid token" });
  }
};

module.exports = fetchuser;
