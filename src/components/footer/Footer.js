import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Designed and Developed <span role="img"></span> by ⚡ {greeting.title}
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          &copy; Copyrights 2024. All rights & wrongs reserved !<br />
          Crafted with love ❤️‍🔥, some chaos😶‍🌫️ + lots of Coffee☕
        </p>
      </Fade>
    </div>
  );
}
