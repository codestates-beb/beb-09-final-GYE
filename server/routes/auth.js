const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post('/signup', async(req, res) => {
    //사용자 정보 가져오기
    const { email, password, nickname } = req.body;

    console.log(req.body);
});

module.exports = router;