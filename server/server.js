const express = require('express')
const app = express()
const db = require("./models");
require("dotenv").config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const port = parseInt(process.env.PORT, 10);
const cors = require("cors");
require("dotenv").config();

const usersRouter = require("./routes/users");
const creategroupRouter = require("./routes/creategroup");
const postRouter = require("./routes/posts");

app.use(cors());
app.use(express.json());
app.use("/user", usersRouter);
app.use("/group", creategroupRouter);
app.use("/posts", postRouter);

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
