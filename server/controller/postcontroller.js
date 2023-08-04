const { Post, Users } = require("../models");


module.exports = {
    //게시글 전체 조회
    getallpostlist: async (req, res) => {
        try {
            const result = await Post.findAll({
                order: [['createdAt', 'DESC']], // <-- Add the "order" option for sorting in descending order
            });
            return res.status(200).json({
                msg: "ok",
                display: result,
            });
        } catch (err) {
            res.status(500).json({ error: 'Failed to get all posts' });
        }
    },

    //게시글 생성
    createpost: async (req, res) => {
        const { email, title, content } = req.body;
        // console.log(req.body);
            
        try {
            const user = await Users.findOne({ where: { email } });

            if (!user) {
                return res.status(404).json({ msg: '사용자가 일치하지 않거나 없습니다.' });
            }

            const post = await Post.create({
                user_id: user.id,
                title: title,
                content: content,
            });

            return res.status(200).json({
                msg: "게시글이 생성되었습니다.",
                data: post,
            });

        } catch (err) {
            res.status(500).send({err:'Failed to write Post' });
        }
    },

    //게시글 업데이트
    updatepost: async (req, res) => {

        const { title, content, email } = req.body;
        const { post_id } = req.params.id;
        const date = new Date();

        try {
            const user = await Users.findOne({ where: { email } });

            const postupdate = await Post.update({
                title: title,
                content: content,
                updatedAt: date,
            }, {
                where: { id: post_id, user_id: user.id }
            });

            console.log(postupdate);

            if (postupdate[0] === 0) {
                res.status(401).send("no access to current post");
            } else {
                return res.status(200).json({
                    msg: "게시글이 수정되었습니다.",
                    data: {
                        title: title,
                        content: content,
                        updatedAt: date,
                        postupdate,
                    },
                });
            }

        } catch (err) {
            res.status(500).send(err);
        }
    }
}