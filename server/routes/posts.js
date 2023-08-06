const express = require("express");
const router = express.Router();
const {
    getallpostlist,
    createpost,
    updatepost,
} = require("../controller/postcontroller");


// 게시글 전체 조회
router.get("/list", getallpostlist);

//게시글 만들기
router.post("/create", createpost);

//게시글 수정
router.put("/update/:post_id", updatepost);


module.exports = router;