import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const modalRef = useRef();

  /**
   * `isNavOpen` 상태 값을 토글하는 함수
   * 현재 상태가 `true`이면 `false`로, `false`이면 `true`로 변경
   * 이 함수는 주로 네비게이션 메뉴의 열기/닫기를 제어하는데 사용
   */
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직을 구현하고, 로그인 성공 시 모달창을 닫는 등의 처리를 수행합니다.
    // 여기에서는 예시로 간단하게 alert을 사용하여 로그인 성공을 알립니다.
    alert(`로그인 성공! 이메일: ${userEmail}, 비밀번호: ${password}`);
    setIsModalOpen(false);
  };

  const handleGoogleLogin = () => {
    alert('구글로 로그인합니다!');
  };

  const handleNaverLogin = () => {
    alert('네이버로 로그인합니다!');
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex justify-center my-4">
      <div className="flex items-center justify-between p-4 w-3/5">
        <div className="text-xl font-bold">로고</div>
        <div className="flex justify-between items-center space-x-4 ml-auto">
          <div className={`cursor-pointer`} onClick={handleNavToggle}>
            계모임
          </div>
          {isNavOpen && (
            <div className="flex flex-col space-y-2">
              <div className="cursor-pointer">계모임 생성하기</div>
              <div className="cursor-pointer">계모임 참여하기</div>
            </div>
          )}
          <div className="cursor-pointer">커뮤니티</div>
          <div className="cursor-pointer">스왑</div>
        </div>
        <button
          className={`ml-10 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer`}
          onClick={handleModalToggle}
        >
          로그인
        </button>
        {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md" ref={modalRef}>
            <h2 className="text-center text-2xl font-bold mb-4">GYE 로그인</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
                placeholder="이메일을 입력하세요"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={handleLogin}
              >
                로그인
              </button>
              <div className="justify-center text-center mt-2">
                <Link to="/signup">회원이 아니신가요?</Link>
              </div>
            </form>
            <div className="mt-4">
            <button
                className="w-full border-2 border-gray-300 py-2 px-4 mt-8 mb-4 rounded-md"
                onClick={handleGoogleLogin}
              >
                Google로 로그인
              </button>
              <button
                className="w-full border-2 border-gray-300 py-2 px-4 rounded-md"
                onClick={handleNaverLogin}
              >
                NAVER로 로그인
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Nav;
