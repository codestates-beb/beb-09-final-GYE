import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import { UserContext } from "../components/Context/UserContext";
import { Container } from "@mui/material";
import './MyPage.css';

// api
import { getUserInfo } from "../api/get-userinfo";

const MyPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    getUserInfo(accessToken)
      .then((result) => {
        console.log(result);
        setUser({
          isLogin: true,
          accessToken: accessToken,
          nickname: result.nickname,
          address: result.address,
          token_amount: result.token_amount,
          eth_amount: result.eth_amount,
          posts: [result.posts],
        });
      })
      .catch((e) => {
        console.log(e);
        setUser({
          isLogin: false,
          accessToken: "",
          nickname: "",
          address: "",
          token_amount: "",
          eth_amount: "",
          posts: [],
        });
        navigate("/login");
      });
  }, []);

  return (
    <div className={location.pathname === "/mypage" ? "route-mypage" : ""}>
      <Container style={{ margin: "1rem auto", width: "70%" }}>
        <UserInfo />
      </Container>
    </div>
  );
};

export default MyPage;