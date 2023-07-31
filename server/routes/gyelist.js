const express = require("express");
const router = express.Router();

const {
    getgroupgye,
    postgyejoin
  } = require("../controller/gyepageController");

// 모든 gye모임 조회 GET API
router.get("/", getgroupgye);

// gye모임 참여 
router.post("/join", postgyejoin);

module.exports = router;