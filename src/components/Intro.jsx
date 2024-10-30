import React from 'react';
import Logo from "../assets/images/Logo.png";

const Intro = () => {
  return (
    <div className="container">
    <div className="intro">
      <div className="intro_box">
        <div className="intro_left">
          <img src={Logo} alt="" />
        </div>
        <div className="intro_right">
          <h1 className="intro_title">About me</h1>
          <p className="intro_text">
            My full name is Bexruz Ergashev, and I am a dedicated student currently pursuing my studies at the Management Development Institute of Singapore in Tashkent, where I am in my second year. Prior to this, I completed my education at the 40th school, where I developed a strong foundation for my academic journey.
          </p>
          <p className="intro_text">
            In addition to my formal education, I have enhanced my skills through an extra course in web design at Proweb. This experience has equipped me with valuable knowledge in IT and web development, which I am eager to apply in my future career.
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Intro;
