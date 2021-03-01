  
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const signup=require("./Backend/Routes/User");
  mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  }).
  catch((err)=>{console.log(err)});

app.use(bodyParser.json());
app.use(cors());

app.use("/api",signup);

//PORT
const port = process.env.PORT || 8000;

//Starting a Server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});