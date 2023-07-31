const express = require("express");
const router = express.Router();
const { GroupPage } = require("../models");

//create group page
router.post("/group/create", async (req, res,) =>{
    const { email, group_name, group_goal, fee, fee_day, max_ppl, group_img} = req.body;
    const date = new Date();

    const finde_group_name = await GroupPage.findeOne({
        group_name,
    });

    if (finde_group_name) {
        res.status(400).send("계모임 이름이 중복입니다.");
    } else {
        console.log(req.body);
        GroupPage.create({
            email: email,
            group_name: group_name,
            group_goal: group_goal,
            fee: fee,
            fee_day: fee_day,
            max_ppl: max_ppl,
            group_img: group_img,
        })
        
            .then((board) => {
                res.status(201).json({ message: "계모임이 생성되었습니다.", board});
            })
            .catch((err) => {
                res.status(500).json({ message: "계모임을 만드는대 실패하셨습니다." , err});
            })
    }       
});




module.exports = router;
