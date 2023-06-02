import React from "react";

import Flippy, { FrontSide, BackSide } from "react-flippy";

import NavBar from "../../components/NavBar/NavBar";
import CapioIcon from "../../assets/capio/icon.svg";
import CapioLogo from "../../assets/capio/logo.svg";
import CapioStationary from "../../assets/capio/capioStationary.jpg";
import BankCard1Front from "../../assets/capio/bank-card-1-front.svg";
import BankCard1Back from "../../assets/capio/bank-card-1-back.svg";
import BankCard2Front from "../../assets/capio/bank-card-2-front.svg";
import BankCard2Back from "../../assets/capio/bank-card-2-back.svg";
import BusinessCardFront from "../../assets/capio/business-card-front.svg";
import BusinessCardBack from "../../assets/capio/business-card-back.svg";
import "./Capio.css";

const Capio = () => {
  return (
    <div>
      <NavBar />
      <div className="capio-container">
        <div className="capio-identity-elements">
          <img src={CapioIcon} alt="capio icon" className="capio-icon" />
          <img src={CapioLogo} alt="capio logo" className="capio-logo" />
        </div>
        <div className="capio-description">
          Capio is a cryptocurrency exchange. The inspiration for the name comes
          from the Latin verb capio which means to receive. The company,
          although active in the digital world, is interested in society and the
          environment.
        </div>
        <div className="capio-description">
          For this reason, a design approach was followed, which combines the
          technological with the human element. In addition, the color palette
          chosen emphasizes the ecological profile of the company.
        </div>
        <div className="cards-display">
          <div className="flip-it">Flip it &#8595;</div>
          <Flippy flipOnClick={true} flipDirection="vertical">
            <FrontSide>
              <img
                src={BusinessCardFront}
                alt="capio business card"
                className="capio-card"
              />
            </FrontSide>
            <BackSide>
              <img
                src={BusinessCardBack}
                alt="capio business card"
                className="capio-card"
              />
            </BackSide>
          </Flippy>

          <Flippy flipOnClick={true} flipDirection="vertical">
            <FrontSide>
              <img
                src={BankCard1Front}
                alt="capio business card"
                className="capio-card"
              />
            </FrontSide>
            <BackSide>
              <img
                src={BankCard1Back}
                alt="capio business card"
                className="capio-card"
              />
            </BackSide>
          </Flippy>

          <Flippy flipOnClick={true} flipDirection="vertical">
            <FrontSide>
              <img
                src={BankCard2Front}
                alt="capio business card"
                className="capio-card"
              />
            </FrontSide>
            <BackSide>
              <img
                src={BankCard2Back}
                alt="capio business card"
                className="capio-card"
              />
            </BackSide>
          </Flippy>
        </div>
        <div className="capio-stationary">
          <img
            src={CapioStationary}
            alt="capio stationary"
            className="capio-stationary-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Capio;
