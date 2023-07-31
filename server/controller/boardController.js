const express = require("express");
const router = express.Router();
const { Post, Users } = require("../models");

module.exports = {
    //게시글 전체 조회
    getallboard: async (req, res) => {
        try {
            const result = await Post.findAll({});
            const display = result.map((el) => {
                return el.datas;
            });
            res.status(200).json({
                message: "ok",
                display: display,
            });
        } catch (err) {
            res.status(500).send(err);
        }
    },

    // 게시글 조회
    getBoardId: async (req, res) => {
        try {
            const post_id = req.params.id;
            const result = await Post.findOne({
                where: {
                    id: post_id,
                },
            });
            const user = await Users.findOne({
                where: {
                    id: result.email,
                },
            });
            const output = result.datas;
            res.status(200).json({
                message: "ok",
                post: output,
                nickname: user.nickname,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}