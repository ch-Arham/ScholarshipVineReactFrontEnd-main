const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const JWT_SECRET = process.env.JWT_SECRET;

//basically to authenticate token and get user.id
const fetchuser = async (req, res, next) => {
  //get a user from jwt token and id to req object
  const token = await req.header("authToken");
  if (!token) {
    return res
      .status(401)
      .send({ error: "please authenticate with valid token 11111" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "please authenticate with valid token 22222" });
  }
};

module.exports = fetchuser;
