const express = require("express");
const router = express.Router();
const { Users } = require("../models");

require("dotenv").config();


//회원가입
router.post('/signup', async (req, res) => {
   
    const { email, password, nickname } = req.body;
    console.log(req.body);
    const date = new Date();
    
    const findeEmail =  await Users.findOne({
        where: {
          email: email,
        },
      });
    if (findeEmail) {
        res.status(400).send("다른 이메일을 사용해 주세요");
    } else {
        Users.create({
            email: email,
            nickname: nickname,
            password: password,
            role: 0,
            gye_amount: 0,
            usdg_amount: 0,
        })
            .then((user) => {
                res.status(201).json({ success: true, message: "회원가입이 완료되었습니다.", user });
            })
            .catch((err) => {
                res.status(500).json({ success: false, message: "회원가입에 실패하였습니다.", err });
            })
    }
});

//로그인
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const user = await Users.findOne({ where: { email, password } });

        if (!user) {
            res.status(400).json({ success: flase, isLoginMessage: "로그인에 실패하였습니다." });
        } else {
            res.status(200).json({ success: true, isLoginMessage: "로그인에 성공하였습니다." });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
        next(err);
    }
})

// //로그아웃
// router.get('/logout', (req,res)=>{
//     req.logout(); 
//     req.session.destroy(); 
//     res.redirect('/');
// });

module.exports = router;