import React from "react";
import Lottie from "lottie-react";
import animeData from "./anime.json";
import "./LoaderLogo.css";

class LoaderLogo extends React.Component {
  render() {
    return (
      <div className="loader-logo-container">
        <Lottie animationData={animeData} loop={true} autoplay={true} />
      </div>
    );
  }
}

export default LoaderLogo;
