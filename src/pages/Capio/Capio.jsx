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
          <p>
            Η εταιρία Capio είναι ένα ανταλλακτήριο κρυπτονομισμάτων (crypto).
          </p>
          <p>
            Η έμπνευση του ονόματος προέρχεται από το λατινικό ρήμα capio που
            σημαίνει λαμβάνω (παίρνω). Η εταιρία, αν και δραστηριοποιείται στον
            ψηφιακό κόσμο, ενδιαφέρεται για την κοινωνία και το περιβάλλον.{" "}
          </p>{" "}
          <p>
            Για αυτόν τον λόγο ακολουθήθηκε μια σχεδιαστική προσέγγιση, η οποία
            συνδυάζει το τεχνολογικό με το ανθρώπινο στοιχείο. Επιπλέον η
            χρωματική παλέτα που επιλέχθηκε δίνει έμφαση στον οικολογικό
            χαρακτήρα της εταιρίας.
          </p>
        </div>
        <div>
          <img
            src={CapioStationary}
            alt="capio stationary"
            className="capio-stationary"
          />
        </div>
        <div className="cards-display">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
        </div>
      </div>
    </div>
  );
};

export default Capio;
