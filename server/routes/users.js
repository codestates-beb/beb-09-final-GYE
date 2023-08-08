const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const { ethers } = require("ethers");
const jwt = require("jsonwebtoken");
require("dotenv").config();


//회원가입
router.post('/signup', async (req, res) => {

  const { email, password, nickname } = req.body;
  console.log(req.body);
  const date = new Date();

    // 새로운 지갑을 생성합니다. 주소는 얻을 수 있는데 프라이빗키는 
  const wallet = ethers.Wallet.createRandom();

  const userAddress = wallet.address;
  const privateKey = wallet.privateKey

  const findeEmail = await Users.findOne({
    where: {
      email: email,
    },
  });
  if (findeEmail) {
    res.status(400).send("다른 이메일을 사용해 주세요");
  } else {
    Users.create({
      email: email,
      password: password,
      nickname: nickname,
      address: userAddress,
      privatekey: privateKey,
      role: 0,
      gye_amount: 0,
      usdg_amount: 0,
    })
      .then((user) => {
        res.status(200).json({
          success: true,
          message: "회원가입이 완료되었습니다.", user
        });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: "회원가입에 실패하였습니다.", err });
      })
  }
});


//로그인
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {``
    const user = await Users.findOne({ where: { email, password } });
    // console.log("=================유저 닉네임", user);
    
    if (!user) {
      res.status(401).json({ msg: "아이디 또는 비밀번호를 정확히 입력해주세요" });
    } else {
       // JWT 토큰 생성을 위한 비밀키(salt)를 설정합니다.
       const secretKey = process.env.ACCESS_SECRET; // 비밀키(salt)는 보안상의 이유로 별도의 보안 저장소에 보관하는 것이 좋습니다.
       console.log(secretKey);
       // 사용자 정보를 기반으로 JWT 토큰을 생성합니다.  // 유효시간: 1시간.
       const token = jwt.sign({ userId: user.id }, secretKey, {
         expiresIn: "1h",
       });

      res.status(200).json({
        isLoginMessage: "로그인에 성공하였습니다.",
        token,
        data: {
          id: user.id,
          email: user.email,
          nickname: user.nickname,
          address: user.Address,
          gye_amount: user.gye_amount,
          usdg_amount: user.usdg_amount,
        },
      })

    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "서버 에러" });
    next(err);
  }
})



module.exports = router;