const { GroupPages, Users, GroupUserJoin} = require("../models");

module.exports = {
    //계모임 조회
    getgroupgye: async (req, res) => {
        try {
            const result = await GroupPages.findAll({});
           
            const gyelist = result.map((el) => {
                return el.dataValues;
            });
            
            res.status(200).json({
                msg: "ok",
                display: gyelist,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },

    //계모임 그룹 참여하기
    postgyejoin: async (req, res)=>{
        const date = new Date();
        const post_email = req.params.email;
        const result = await GroupPage.findOne({
            where:{
                email: post_email,
            }
        })
       
        if (findeEmail) {
            res.status(400).send("이미 참여가 된 계모임입니다.");
        } else {
            GroupUserJoin.Create({
                group_id: result.group_id,
                email: email,
                created_at: date,
            })
                .then((user) => {
                    res.status(201).json({ success: true, message: "계모임에 참여가 완료되었습니다.", user });
                })
                .catch((err) => {
                    res.status(500).json({ success: false, message: "계모임 참여에 실패하였습니다.", err });
                })
        }
        
    }

}