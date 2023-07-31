import React, { useState } from 'react';
import JoinGroupItem from '../components/JoinGroupItem';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HeadContent from '../components/HeadContent';

const JoinGroup = () => {
  // 가상의 계모임 목록 데이터
  const initialGroups = [
    {
      id: 1,
      title: '계모임 1',
      imageUrl: 'https://via.placeholder.com/300',
      description: '계모임 1 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkTo: '/group/1',
    },
    {
      id: 2,
      title: '계모임 2',
      imageUrl: 'https://via.placeholder.com/300',
      description: '계모임 2 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkTo: '/group/2',
    },
    {
      id: 3,
      title: '계모임 3',
      imageUrl: 'https://via.placeholder.com/300',
      description: '계모임 3 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkTo: '/group/3',
    },
    {
      id: 4,
      title: '계모임 4',
      imageUrl: 'https://via.placeholder.com/300',
      description: '계모임 4 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkTo: '/group/4',
    },
    {
      id: 1,
      title: '계모임 1',
      imageUrl: 'https://via.placeholder.com/300',
      description: '계모임 1 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkTo: '/group/1',
    },
    {
      id: 2,
      title: '계모임 2',
      imageUrl: 'https://via.placeholder.com/300',
      description: '계모임 2 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkTo: '/group/2',
    },
    {
      id: 3,
      title: '계모임 3',
      imageUrl: 'https://via.placeholder.com/300',
      description: '계모임 3 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkTo: '/group/3',
    },
    {
      id: 4,
      title: '계모임 4',
      imageUrl: 'https://via.placeholder.com/300',
      description: '계모임 4 설명 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkTo: '/group/4',
    },
    // ... (총 8개의 계모임 데이터)
  ];

  const [groups, setGroups] = useState(initialGroups);
  const [visibleGroups, setVisibleGroups] = useState(8);

  const handleLoadMore = () => {
    setVisibleGroups((prevVisibleGroups) => prevVisibleGroups + 8);
  };

  return (
    <div>
      <Nav />
      <div className="container w-3/5 mx-auto my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {groups.slice(0, visibleGroups).map((group) => (
            <JoinGroupItem
              key={group.id}
              title={group.title}
              imageUrl={group.imageUrl}
              description={group.description}
              linkTo={group.linkTo}
            />
          ))}
        </div>
        {visibleGroups < groups.length && (
          <button
            className="justify-center px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleLoadMore}
          >
            더보기
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default JoinGroup;
