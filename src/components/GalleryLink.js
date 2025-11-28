// src/components/GalleryLink.js
import React from 'react';
import { Link } from 'react-router-dom'; // 引入 Link

const GalleryLink = ({ text, link }) => {
  return (
    <div className="gallery-link">
      {/* 使用 Link 代替 a 标签 */}
      <Link to={link}>
        {text}
      </Link>
    </div>
  );
};

export default GalleryLink;