const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const JWT_SECRET = process.env.JWT_SECRET;

//basically to authenticate token and get user.id
const fetchuser = (req, res, next) => {
  //Get user from JWT and add id to req object

  // first we get the token from the header
  const token = req.header("authToken");
  //verify that the token is given
  if (!token) {
    return res.status(401).send({ error: "authenticate using a token" });
  }

  try {
    //return the decoded token --> data. Put in trycatch as jwt.verify can fail
    const data = jwt.verify(token, JWT_SECRET);

    //console.log(req.user) //undefined as it is not present
    req.user = data.user; //pass the data (id) in req.user.id
    next(); //next function should be executed --> the async (req,res) 3rd arg
    //console.log(req.user) //{id: '61b13105957a64ddbc5fa68a'} created
  } catch (error) {
    return res.status(401).send({ error: "Authenticate using a valid token" });
  }
};

module.exports = fetchuser;
