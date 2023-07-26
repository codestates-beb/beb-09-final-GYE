import React, { useState } from 'react';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  /**
   * `isNavOpen` 상태 값을 토글하는 함수
   * 현재 상태가 `true`이면 `false`로, `false`이면 `true`로 변경
   * 이 함수는 주로 네비게이션 메뉴의 열기/닫기를 제어하는데 사용
   */
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`flex justify-center items-center mx-auto p-4 bg-gray-100`}>
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
        onClick={() => {}}
      >
        로그인
      </button>
    </div>
  );
};

export default Nav;
