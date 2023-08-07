const express = require("express");
const router = express.Router();
const { findgyedisplay, getprogile } = require("../controller/profilecontorller");


// 마이페이지 
router.get("/:email", getprogile);



//마이페이지 계그룹 참여한 사람 보기
router.get("/list/:group_id", findgyedisplay);

module.exports = router;