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
    maxMember: 100,
  };

  return (
    <div>
      <Nav />
      <div className="container w-3/5 mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={groupData.groupImage} alt={groupData.groupName} className="w-full h-auto md:h-80 object-cover rounded-md" />
          <div className='w-full'>
            <div className="mb-4">
              <strong>모임 이름</strong>
              {groupData.groupName}
            </div>
            <div className="mb-4">
              <strong>모임 목적</strong>
              {groupData.groupPurpose}
            </div>
            <div className="mb-4">
              <strong>월 회비</strong>
              {groupData.membershipFee}
            </div>
            <div className="mb-4">
              <strong>회비 납부일</strong>
              {groupData.paymentDate}
            </div>
            <div className="mb-4">
              <strong>최대 인원수</strong>
              {groupData.maxMember}
            </div>
          </div>
          <div className="w-full text-right my-8">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                개설하기
              </button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroupDetail;
