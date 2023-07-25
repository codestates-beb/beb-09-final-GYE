import React from 'react';

const Nav = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="text-xl font-bold">로고</div>
      <div className="flex items-center space-x-4">
        <div className="cursor-pointer">계모임</div>
        <div className="cursor-pointer">커뮤니티</div>
        <div className="cursor-pointer">스왑</div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        로그인
      </button>
    </header>
  );
};

export default Nav;
