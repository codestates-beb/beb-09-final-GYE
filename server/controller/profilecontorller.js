const { Room_Groups, Users, ManageGroups, Post } = require("../models");
const { Op } = require("sequelize");

module.exports = {

    //마이페이지 정보
    getprogile: async (req, res) => {

        const { email } = req.params;

        try {
            const user = await Users.findOne({ where: { email } });


            if (user) {
                const findgroup = await Room_Groups.findOne({ where: { g_user_id: user.id } });

                const userPost = await Post.findAll({
                    where: {
                        user_id: user.id,
                    },
                });
                //   console.log(userPost );
                const postData = userPost.map((post) => {
                    return {
                        postId: post.id,
                        title: post.title,
                        content: post.content,
                        createdAt: post.createdAt,
                    };
                });

                // console.log(postData);
                const responseData = {
                    email: user.email,
                    nickname: user.nickname,
                    address: user.address,
                    gye_amount: user.gye_amount,
                    usdg_amount: user.usdg_amount,
                    createdAt: user.createdAt,

                    groups: {
                        id: findgroup.id,
                        group_name: findgroup.group_name,
                    },


                }

                res.status(200).json({
                    msg: 'Find Usersdata',
                    data: responseData,
                    postsdata: postData
                })
            }
        } catch (err) {
            res.status(400).json({ error: 'The request message is invalid.' });
        }

    },

    //마이페이지 계그룹 참여한 사람 보기
    findgyedisplay: async (req, res) => {
        const { group_id } = req.params;
        console.log(group_id, "gourp_id=-----------------");
        try {
            const records = await ManageGroups.findAll({
                attributes: ["nickname", "month", "yes_no_fee_payment", "createdAt"],
                where: {
                    group_id: group_id,
                    user_id: {
                        [Op.between]: [1, 10000],
                    },
                },
            });

            
            console.log("데이터 체크====",records);
            res.status(200).json({
                msg: "ok",
                data: records,
            });

        } catch (err) {
            console.log(err);
        }
    }
}
