import React, { useEffect } from "react";
import "./LoaderLogo.css";

const LoaderLogo = ({ theme }) => {
  useEffect(() => {
    const preLoaderAnim = () => {
      const texts = document.querySelectorAll(".texts-container span");
      let delay = 0;

      texts.forEach((text) => {
        text.style.animation = `fadeSlide 1s ${delay}s forwards`;
        delay += 0.5;
      });
    };

    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default LoaderLogo;
