const express = require("express");
const router = express.Router();

const {
    getgyegroup,
    postgyejoin
  } = require("../controller/gyepageController");

// 모든 gye모임 조회 GET API
router.get("/group", getgyegroup);

// gye모임 참여 
router.post("/group/join", postgyejoin);

module.exports = router;