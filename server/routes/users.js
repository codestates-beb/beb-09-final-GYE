const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const { ethers } = require("ethers");
require("dotenv").config();


//회원가입
router.post('/signup', async (req, res) => {

  const { email, password, nickname } = req.body;
  console.log(req.body);
  const date = new Date();

  const wallet = ethers.Wallet.createRandom();

  const userWallet = wallet.connect(ethers.provider);

  const userAddress = userWallet.address;
  const privateKey = userWallet.privateKey; //개인 키는 암호화해서 저장하면 좋음?? -> 찾아보자.
   

  console.log("지갑주소 확인 -----------",wallet);

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
  try {
    let user = await Users.findOne({ where: { email, password } });
    // console.log("=================유저 닉네임", user);
    if (!user) {
      res.status(401).json({ msg: "아이디 또는 비밀번호를 정확히 입력해주세요" });
    } else {
      res.status(200).json({
        msg: "로그인에 성공했습니다.",
        data: {
          id: user.id,
          email: user.email,
          nickname: user.nickname,
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