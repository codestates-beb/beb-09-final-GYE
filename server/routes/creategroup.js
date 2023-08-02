const express = require("express");
const router = express.Router();
const {
    creategrouplist,
    findgrouplist
      // postgyejoin
    } = require("../controller/gyegroupcontroller");


//create group page
router.post("/create", creategrouplist);

//전체 그룹 조회 
router.get("/list", findgrouplist);

//참여하기


module.exports = router;
