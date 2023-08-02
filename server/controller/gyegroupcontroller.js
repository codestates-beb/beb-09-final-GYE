const { Room_Groups, Users } = require("../models");

module.exports = {

    //create group page
    creategrouplist: async (req, res) => {
        const { email, group_name, group_goal, fee, fee_day, max_ppl, group_img } = req.body;
        // console.log(req.body);
        try {
            const user = await Users.findOne({ where: { email } });

            const finde_group_name = await Room_Groups.findOne({
                where: {
                    group_name: group_name,
                },

            });

            if (finde_group_name) {
                res.status(400).send("계모임 이름이 중복입니다.");
            } else {
                console.log(req.body);
                Room_Groups.create({
                    email: email,
                    g_user_id: user.id,
                    group_name: group_name,
                    group_goal: group_goal,
                    fee: fee,
                    fee_day: fee_day,
                    max_ppl: max_ppl,
                    group_img: group_img,
                })

                    .then((board) => {
                        res.status(201).json({
                            message: "계모임이 생성되었습니다.",
                            board,
                        });
                    })
                    .catch((err) => {
                        res.status(500).json({ message: "계모임을 만드는대 실패하셨습니다.", err });
                    })
            }
        } catch (err) {
            res.status(500).json({ message: "계모임을 만드는대 실패하셨습니다.", err });
        }
    },


    //계모임 조회
    findgrouplist: async (req, res) => {
        try {
            const result = await Room_Groups.findAll({});

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
    }

    //계모임 그룹 참여하기
    //  postgyejoin: async (req, res)=>{
    //     const date = new Date();
    //     const post_email = req.params.email;
    //     const result = await GroupPage.findOne({
    //         where:{
    //             email: post_email,
    //         }
    //     })

    //     if (findeEmail) {
    //         res.status(400).send("이미 참여가 된 계모임입니다.");
    //     } else {
    //         GroupUserJoin.Create({
    //             group_id: result.group_id,
    //             email: email,
    //             created_at: date,
    //         })
    //             .then((user) => {
    //                 res.status(201).json({ success: true, message: "계모임에 참여가 완료되었습니다.", user });
    //             })
    //             .catch((err) => {
    //                 res.status(500).json({ success: false, message: "계모임 참여에 실패하였습니다.", err });
    //             })
    //     }

    // }

}