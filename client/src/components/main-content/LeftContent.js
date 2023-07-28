import React from 'react';
import { Link } from 'react-router-dom';

const LeftContent = ({ title, imageUrl, linkTo, buttonText }) => {
  return (
    <div className="flex justify-center my-4 border-y-8">
      <div className="flex items-center justify-between p-4 w-3/5">
        <div className="justify-end">
          <h2 className="text-xl font-bold mb-6">{title}</h2>
          <Link to={linkTo} className="bg-blue-500 border-solid border-2 px-4 py-2 rounded-md">
            {buttonText}
          </Link>
        </div>
        <img src={imageUrl} alt="Content" className="w-40 h-40" />
      </div>
    </div>
  );
};

export default LeftContent;
