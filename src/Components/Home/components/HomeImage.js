import React from "react";
import Introimg from "../../../assets/bgimg.jpg";
import { useNavigate } from "react-router-dom";

const HomeImage = () => {
  const navigate = useNavigate();
  const handleTalk = () => {
    navigate("contact");
  };
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        <h1 className="hello">HEY, I'M ASAD RAIYAN</h1>
        <div className="bio">
          A passionate and focused Frontend Developer, building user-friendly
          web applications that leads to the success of the overall product
        </div>
        <div className="info">
          <a
            href="https://drive.google.com/file/d/1R0MVygeEI4tSj7qzt1nMOkmYBoCOWUJ0/view?usp=drivesdk"
            className="resume"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
          <button className="talk" onClick={handleTalk}>
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
