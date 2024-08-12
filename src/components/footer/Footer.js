import React, { useState, useEffect, useMemo } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  const [emoji, setEmoji] = useState("❤️‍🔥");

  const emojis = useMemo(
    () => ["❤️‍🔥", "😎", "🤩", "😉", "😵‍💫", "😭", "💻", "🪄", "🤘🏻"],
    []
  );

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setEmoji(emojis[currentIndex]);
      currentIndex = (currentIndex + 1) % emojis.length;
    }, 700);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [emojis]);

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Designed and Developed by{" "}
          <span className="link link-underline link-underline-black" href="#">
            Gokul Raja
          </span>
          ⚡
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Crafted with love <span id="emojiContainer">{emoji}</span>, some
          chaos😶‍🌫️ + lots of Coffee☕
        </p>
      </Fade>
    </div>
  );
}
