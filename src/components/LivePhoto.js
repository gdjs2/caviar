// src/components/LivePhoto.js
import React, { useEffect, useRef } from "react";
import * as LivePhotosKit from "livephotoskit";

const LivePhoto = ({ photoSrc, videoSrc, className = "", style = {} }) => {
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
        aspectRatio: "3 / 4",
        ...style 
      }} 
    />
  );
};

export default LivePhoto;