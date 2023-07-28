const express = require('express')
const app = express()
const db = require("./models");
const port = 5000;


const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth")


app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);


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
