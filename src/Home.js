import React, { useEffect } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import GalleryLink from "./components/GalleryLink";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LivePhoto from "./components/LivePhoto";

import languages from "./i18n";
import { catBirthday, getCatAgeString } from "./utils/age";

import "./App.css";

function Home({ lang, setLang }) {
  const t = languages[lang];

  const age = getCatAgeString(catBirthday, t.formatAge);
  const intro = t.introTemplate.replace("{age}", age);

  useEffect(() => {
    document.title = t.title;
  }, [t]);

  return (
    <div className="page-layout">
      {/* 语言切换器是 fixed 定位，放哪里都可以 */}
      <LanguageSwitcher lang={lang} setLang={setLang} />

      {/* 1. 标题区域 */}
      <div className="area-header">
        <Header title={t.header} />
      </div>

      {/* 2. 照片区域 (注意：在 HTML 顺序上我把它放在这里，但显示位置由 CSS 控制) */}
      <div className="area-photo">
        <LivePhoto
          photoSrc={process.env.PUBLIC_URL + "/images/Homepage.jpeg"}
          videoSrc={process.env.PUBLIC_URL + "/images/Homepage.MOV"}
          className="my-live-photo"
        />
        {/* <img src={process.env.PUBLIC_URL + "/images/Homepage.jpeg"} alt="Cavyy" /> */}
      </div>

      {/* 3. 简介区域 */}
      <div className="area-intro">
        <Intro text={intro} />
      </div>

      {/* 4. 联系方式 */}
      <div className="area-contact">
        <Contact text={t.contactIntro} contacts={t.contacts} />
      </div>

      {/* 5. 画廊链接 */}
      <div className="area-gallery">
        <GalleryLink text={t.gallery} link="/gallery" />
      </div>
    </div>
  );
}

export default Home;