// src/App.js

import React, { useState } from "react"; // 1. 引入 useState
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Gallery from "./components/Gallery";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // 2. 在这里定义语言状态，默认中文
  const [lang, setLang] = useState("zh");

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* 3. 把 lang 和 setLang 传递给 Home */}
        <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
        
        {/* 4. 把 lang 和 setLang 传递给 Gallery */}
        <Route path="/gallery" element={<Gallery lang={lang} setLang={setLang} />} />
      </Routes>
    </>
  );
}

export default App;