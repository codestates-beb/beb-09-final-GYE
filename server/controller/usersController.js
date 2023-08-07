const { ethers } = require("ethers");
const jwt = require("jsonwebtoken");
const { Post, Users } = require("../models");

module.exports = {
  getUserById: async (req, res) => {
    try {
      if (!req.headers.authorization) {
        return res.status(400).send("no authorization");
      } else {
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, process.env.ACCESS_SECRET);
        const userId = data.userId;

        const userInfo = await Users.findOne({
          where: {
            id: userId,
          },
        });
        console.log(userInfo);
        const userPost = await Post.findAll({
          where: {
            user_id: userId,
          },
        });
        const postData = userPost.map((post) => {
          return {
            postId: post.id,
            title: post.title,
            content: post.content,
            createdAt: post.createdAt,
          };
        });

        return res.status(200).json({
          msg: "ok",
          nickname: userInfo.nickname,
          address: userInfo.address,
          token_amount: userInfo.token_amount,
          eth_amount: userInfo.eth_amount,
          posts: postData,
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal server error");
    }
  },
};
