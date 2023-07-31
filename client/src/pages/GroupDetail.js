import React from 'react';

const GroupDetail = () => {
  // 가상의 모임 정보 데이터
  const groupData = {
    groupName: '모임명',
    groupImage: 'https://via.placeholder.com/400',
    createdDate: '2023-07-30',
    groupLeader: '모임장 이름',
    groupPurpose: '모임 목적',
    membershipFee: '100,000원',
    paymentDate: '매월 1일',
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{groupData.groupName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={groupData.groupImage} alt={groupData.groupName} className="w-full h-auto md:h-80 object-cover rounded-md mb-8" />
        <div>
          <div className="mb-4">
            <strong>모임명: </strong>
            {groupData.groupName}
          </div>
          <div className="mb-4">
            <strong>모임 생성 날짜: </strong>
            {groupData.createdDate}
          </div>
          <div className="mb-4">
            <strong>모임장: </strong>
            {groupData.groupLeader}
          </div>
          <div className="mb-4">
            <strong>모임 목적: </strong>
            {groupData.groupPurpose}
          </div>
          <div className="mb-4">
            <strong>회비: </strong>
            {groupData.membershipFee}
          </div>
          <div className="mb-4">
            <strong>회비 납부일: </strong>
            {groupData.paymentDate}
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
            참여하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
