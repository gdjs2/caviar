// src/components/Gallery.js

import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import LivePhoto from "./LivePhoto";
import photoList from "../data/photos.json";
import LanguageSwitcher from "./LanguageSwitcher";
import languages from "../i18n";
import useMasonry from "../utils/useMasonry";
import { shuffleArray } from "../utils/arrayUtils";
import "./Gallery.css";

// 定义列数的响应式逻辑
const getColumnCount = (width) => {
  if (width > 900) {
    return 3;
  } else if (width > 600) {
    return 2;
  } else {
    return 1;
  }
};

const Gallery = ({ lang, setLang }) => {
  const t = languages[lang]; 

  useEffect(() => {
    document.title = t.galleryTitle;
  }, [t]);
  
  // 响应式列数状态
  const [columnCount, setColumnCount] = useState(getColumnCount(window.innerWidth));

  const shuffledPhotoList = useMemo(() => {
    return shuffleArray(photoList);
  }, []);

  // 监听窗口大小变化以更新列数
  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 使用 Masonry Hook 处理数据
  const masonryColumns = useMasonry(shuffledPhotoList, columnCount);

  return (
    <div className="gallery-page">
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div className="gallery-header">
        <Link to="/" className="back-link">
          {t.backToHome}
        </Link>
        <h1>{t.galleryTitle}</h1>
      </div>

      <div className="gallery-grid">
        {masonryColumns.map((columnItems, columnIndex) => (
          <div key={columnIndex} className="masonry-column">
            {columnItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <LivePhoto
                  photoSrc={process.env.PUBLIC_URL + `/images/gallery/${item.image}`}
                  videoSrc={process.env.PUBLIC_URL + `/images/gallery/${item.video}`}
                  className="gallery-live-photo"
                  aspectRatio={item.aspectRatio} 
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {photoList.length === 0 && (
        <div className="empty-state">{t.emptyGallery}</div>
      )}
    </div>
  );
};

export default Gallery;