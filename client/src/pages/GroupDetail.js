import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const GroupDetail = () => {
  // 가상의 모임 정보 데이터
  const groupData = {
    groupImage: 'https://via.placeholder.com/400',
    groupName: '모임명',
    createdDate: '2023-07-30',
    groupLeader: '모임장 이름',
    groupPurpose: '모임 목적',
    membershipFee: '100,000원',
    paymentDate: '매월 1일',
  };

  return (
    <div>
      <Nav />
      <div className="container w-3/5 mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-600">{groupData.groupName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={groupData.groupImage} alt={groupData.groupName} className="w-full h-auto md:h-80 object-cover rounded-md" />
          <div className='w-full'>
            <div className="mb-4">
              <label>모임 생성 날짜</label>
              {groupData.createdDate}
            </div>
            <div className="mb-4">
              <strong>모임장</strong>
              {groupData.groupLeader}
            </div>
            <div className="mb-4">
              <strong>모임 목적</strong>
              {groupData.groupPurpose}
            </div>
            <div className="mb-4">
              <strong>회비</strong>
              {groupData.membershipFee}
            </div>
            <div className="mb-4">
              <strong>회비 납부일</strong>
              {groupData.paymentDate}
            </div>
            <div className="w-full text-right my-8">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                참여 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroupDetail;
