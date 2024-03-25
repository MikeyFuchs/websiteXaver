import React from "react";
import heroImage from "../resources/heroPic.jpg";
import sDevIcon from '../resources/smallDevIcon.png'

const Hero = () => {
  return (
    <>
      <div className={"Hero"}>
        <div className={"image-container"}>
          <div className={"image"}></div>
          <div className={"grayScaleLeft"}></div>
          <div className={"text"}>
            <div className="text">
              <div className="finalText">
                <h1>
                  <span className="highlight">EX</span> SOLUTION
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={'smallDeviceHero'}>
          <h1>
            <span className="highlight">EX</span> SOLUTION</h1>
            <img src={sDevIcon} className={'sDevIcon'} alt="smallDeviceIcon"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
