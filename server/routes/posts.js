const express = require("express");
const router = express.Router();
const {
    getallpostlist,
    createpost,
    updatepost,
} = require("../controller/postcontroller");


// 게시글 전체 조회
router.get("/", getallpostlist);

//게시글 만들기
router.post("/create", createpost);

//게시글 수정
router.post("/update", updatepost);


module.exports = router;