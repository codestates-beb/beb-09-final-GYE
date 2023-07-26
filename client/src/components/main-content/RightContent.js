import React from 'react';
import { Link } from 'react-router-dom';

const RightContent = ({ title, imageUrl, linkTo, buttonText }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 my-4">
      <img src={imageUrl} alt="Content" className="w-40 h-40" />
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <Link to={linkTo} className="bg-blue-500 border-solid border-2 px-4 py-2 rounded-md">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default RightContent;
