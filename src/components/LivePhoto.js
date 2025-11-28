// src/components/LivePhoto.js
import React, { useEffect, useRef } from "react";
import * as LivePhotosKit from "livephotoskit";

// 1. 在这里接收 aspectRatio 参数，默认给个 3/4 (0.75) 防止未传值时塌陷
const LivePhoto = ({ 
  photoSrc, 
  videoSrc, 
  aspectRatio = 0.75, // 默认竖屏
  className = "", 
  style = {} 
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && photoSrc && videoSrc) {
      LivePhotosKit.augmentElementAsPlayer(ref.current, {
        photoSrc,
        videoSrc,
      });
    }
  }, [photoSrc, videoSrc]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        width: "100%", 
        // 2. 直接使用传入的比例
        // CSS aspect-ratio 支持数字 (如 1) 或分数 (如 3/4)
        aspectRatio: aspectRatio, 
        
        ...style 
      }} 
    />
  );
};

export default LivePhoto;