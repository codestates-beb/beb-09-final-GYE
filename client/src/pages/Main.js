import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import HeadContent from '../components/main-content/HeadContent';
import LeftContent from '../components/main-content/LeftContent';
import RightContent from '../components/main-content/RightContent';
import Footer from '../components/footer/Footer';

const Main = () => {
  return (
    <div>
      <Nav />
      {/* <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
        </Switch> */}
      <HeadContent
        title="GYE모임에 오신 것을 환영합니다"
        text="첫 번째 컨텐츠 내용입니다."
        imageUrl="../assets/image.png"
      />
      <RightContent
        title={["GYE모임에 참여하여", <br />, "목돈을 모으세요"]}
        imageUrl="https://via.placeholder.com/200"
        linkTo="/page1"
        buttonText="모임 참여하기"
      />
      <LeftContent
        title={["GYE모임을 만들고", <br />, "모임을 운영하세요"]}
        imageUrl="https://via.placeholder.com/200"
        linkTo="/page2"
        buttonText="모임 만들기"
      />
      <RightContent
        title={["GYE모임 커뮤니티에서", <br />, "놀아보세요"]}
        imageUrl="https://via.placeholder.com/200"
        linkTo="/page3"
        buttonText="커뮤니티 바로가기"
      />
      <Footer />
    </div>
  );
};

export default Main;
