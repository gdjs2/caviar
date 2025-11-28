// src/components/Gallery.js

import React from "react";
import { Link } from "react-router-dom";
import LivePhoto from "./LivePhoto";
import photoList from "../data/photos.json";
import LanguageSwitcher from "./LanguageSwitcher";
import languages from "../i18n";
import "./Gallery.css";

const Gallery = ({ lang, setLang }) => {
  const t = languages[lang]; 

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
        {photoList.map((item) => (
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

      {photoList.length === 0 && (
        <div className="empty-state">{t.emptyGallery}</div>
      )}
    </div>
  );
};

export default Gallery;