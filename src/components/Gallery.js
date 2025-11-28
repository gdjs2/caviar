// src/components/Gallery.js

import React from "react";
import { Link } from "react-router-dom";
import LivePhoto from "./LivePhoto";
import photoList from "../data/photos.json";
import LanguageSwitcher from "./LanguageSwitcher"; // 1. 引入语言切换器
import languages from "../i18n"; // 2. 引入语言包
import "./Gallery.css";

// 3. 接收 lang 和 setLang
const Gallery = ({ lang, setLang }) => {
  // 4. 获取当前语言的翻译
  const t = languages[lang]; 

  return (
    <div className="gallery-page">
      {/* 5. 放入语言切换器 (位置和主页一样) */}
      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div className="gallery-header">
        <Link to="/" className="back-link">
          {/* 使用翻译变量 */}
          {t.backToHome}
        </Link>
        <h1>{t.galleryTitle}</h1>
      </div>

      <div className="gallery-grid">
        {photoList.map((item) => (
          <div key={item.id} className="gallery-item">
            <LivePhoto
              photoSrc={process.env.PUBLIC_URL + `/images/gallery/${item.image}`}
              videoSrc={process.env.PUBLIC_URL + `/images/gallery/${item.video}`}
              className="gallery-live-photo"
            />
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