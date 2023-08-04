const express = require("express");
const router = express.Router();
const { findgyedisplay, getprogile } = require("../controller/profilecontorller");


// 마이페이지 
router.get("/:email", getprogile);

module.exports = router;