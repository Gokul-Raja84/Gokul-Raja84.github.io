import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen">
        <div className="preloader">
          <div className="texts-container">
            <span>Developer,</span>
            <span>Curator,</span>
            <span>Vibes.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? <Redirect to="/home" /> : <AnimatedSplash />;
  }
}

export default Splash;
