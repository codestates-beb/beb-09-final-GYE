import React from 'react';
import { FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto">
        <div className="grid items-center mb-4">
          <div>로고</div>
          <div>
            <ul>
              <li>페이지 1</li>
              <li>페이지 2</li>
              <li>페이지 3</li>
              <li>페이지 4</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center text-xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="icon" />
          </a>
          <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
