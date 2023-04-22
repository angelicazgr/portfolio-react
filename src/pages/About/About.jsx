import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import myPhoto from "../../assets/about-photo.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <div>
        <img src={myPhoto} alt="Angelica" />
      </div>
      <div>
        I worked as a freelance customs broker for 8 years and I am currently
        learning graphic design and software development.
        <br />
        As a freelance customs broker, my main role was to consult my clients
        for the most cost-effective ways that they could use for their projects
        and also represent them at the customs authorities.
        <br />
        Moreover, as I value accuracy, I always searched for new regulations
        that could apply to the requested products. Being updated can really
        make a difference because laws and regulations continuously change. I
        like learning, so these circumstances never frustrate me.
        <br />
        Furthermore, as I worked with more than 25 companies, I cooperated with
        very different teams and departments to accomplish successful projects.
        The teams that I worked with were from financial, supply, import,
        export, and transportation departments. As these departments had
        different needs, I focused on improving my knowledge by attending
        seminars on accounting for taxes and duties and by learning the Turkish
        language, as Turkey was the main import country for many of my clients.
        Being a Turkish speaker gave me the chance to communicate with the
        exporting companies and solve customs issues. In addition, this affected
        in a positive way all the transport problems.
        <br />
        Overall, taking part in all these projects and working in an
        international environment helped me to communicate better with
        individuals and teams. I strongly believe that finding a solution to a
        problem is not enough. It is also necessary to be communicated in a
        clear way, so everyone can understand its value.
        <br />
        Late in 2020, I decided to make a career change, as I had studied
        software engineering and I never had the chance to work in this field.
        Currently, I am refreshing my coding skills and also, I am a graphic
        design student in AKTO college, in collaboration with Middlesex
        University, London. I believe that, combining this knowledge, I would be
        able to provide interesting solutions in the development process.
      </div>
    </div>
  );
};

export default About;
