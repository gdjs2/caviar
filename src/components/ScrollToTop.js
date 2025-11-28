// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // 获取当前路径
  const { pathname } = useLocation();

  useEffect(() => {
    // 每次路径变化时，把窗口滚动到 (0, 0) 左上角
    window.scrollTo(0, 0);
  }, [pathname]); // 依赖项是 pathname，变了就执行

  return null; // 不需要渲染任何 UI
}

export default ScrollToTop;