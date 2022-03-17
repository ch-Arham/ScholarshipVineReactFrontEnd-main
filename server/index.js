const connectToMongo = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");

const auth = require("./routes/auth");

connectToMongo();

dotenv.config({ path: "server/.env" });

//parse json to body
app.use(express.json());

app.use(cors());

app.use("/api/auth", auth);

app.listen(process.env.PORT, () => {
  console.log("Listening to port:5000....");
});
