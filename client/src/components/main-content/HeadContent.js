import React from 'react';

const HeadContent = ({ title, text, imageUrl }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-yellow-200 my-4">
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{text}</p>
      </div>
      <img src={imageUrl} alt="Content" className="w-40 h-40" />
    </div>
  );
};

export default HeadContent;
