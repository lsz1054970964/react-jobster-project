import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster-logo" className="logo"></img>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <button className="btn btn-hero">login/register</button>
        </div>
        <img src={main} alt="job-hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default landing;
