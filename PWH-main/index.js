const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./Routes/user");
// const notFound=require("./middleware/not-found")
const connectDb = require("./db/connect");
require("dotenv").config();
app.use(cors());
//middlewares
// app.use(express.static('./public'));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//routes
app.use("/api/v1/scrap/", routes);
// app.use(notFound)
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`backend is running on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
