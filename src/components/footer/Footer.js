import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Designed and Developed by{" "}
          <a className="link link-underline link-underline-black">Gokul Raja</a>
          ⚡
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Crafted with love ❤️‍🔥, some chaos😶‍🌫️ + lots of Coffee☕
        </p>
      </Fade>
    </div>
  );
}
