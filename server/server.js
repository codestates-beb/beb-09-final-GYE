const express = require('express')
const app = express()
const db = require("./models");
require("dotenv").config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const port = parseInt(process.env.PORT, 10);

const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth");
const groupRouter = require("./routes/creategye");


app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/group", groupRouter);


app.listen(port, () => {
  console.log(` 
  ################################################
  ***  Server listening on port: ${port} ***
  ################################################`)
  
});

db.sequelize
  .sync({})
  .then(() => {
    console.log("dababase connected");
  })
  .catch(console.error);
