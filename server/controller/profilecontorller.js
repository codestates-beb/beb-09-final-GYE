const { Room_Groups, Users, ManageGroups } = require("../models");
const { Op } = require("sequelize");

module.exports = {


    getprogile: async (req, res) => {
        
        const { email } = req.params;
        console.log("데이터 테스트!!!!!",email)
        try {
            const user = await Users.findOne({ where: { email } });

            if (user) {
                const findgroup = await Room_Groups.findOne({ where: { g_user_id: user.id } })


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
                    }
                }

          

                res.status(200).json({
                    msg: 'Find Usersdata',
                    data: responseData

                })
            }
        } catch (err) {
            res.status(400).json({ error: 'The request message is invalid.' });
        }

    },

    findgyedisplay: async (req, res) => {
        const { group_id } = req.params;

        try {
            const records = await ManageGroups.findAll({
                attributes: ["nickname", "mmonth", "yes_no_fee_payment", "createdAt"],
                where: {
                    group_id: group_id,
                    user_id: {
                        [Op.between]: [group_id, 10000],
                    },
                },
            });
            console.log(records);
            res.status(200).json({
                msg: "ok",
                data: records,
            });

        } catch (err) {
            console.log(err);
        }
    }
}
