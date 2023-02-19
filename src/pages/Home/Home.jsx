import React from "react";

import NavBar from "../../components/NavBar/NavBar";

import IntroVideo from "../../assets/intro.mp4";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <video width="auto" height="auto" autoPlay loop muted>
          <source src={IntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
        <div>Project 4</div>
      </div>
      <div>
        <div>email</div>
        <div>subject</div>
        <div>message</div>
        <div>send</div>
      </div>
      <div>
        <div>footer</div>
      </div>
    </div>
  );
};

export default Home;
