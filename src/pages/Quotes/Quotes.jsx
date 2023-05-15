import React from "react";
import Zoom from "react-medium-image-zoom";

import CarsonQuote from "../../assets/quotes/carson.jpg";
import CocteauQuote from "../../assets/quotes/cocteau.jpg";
import RembrandtQuote from "../../assets/quotes/rembrandt.jpg";
import WarholQuote from "../../assets/quotes/warhol.jpg";
import NavBar from "../../components/NavBar/NavBar";

import "react-medium-image-zoom/dist/styles.css";
import "./Quotes.css";

const Quotes = () => {
  return (
    <div>
      <NavBar />
      <div className="quotes-container">
        <div className="quotes-row">
          <div className="quotes-card">
            <div className="quotes-image-title">Carson</div>
            <div className="quotes-image-description">
              Inspired by the extraordinary style of David Carson
            </div>
            <Zoom>
              <img
                src={CarsonQuote}
                alt="carson-quote"
                className="quotes-image"
              />
            </Zoom>
          </div>
          <div className="quotes-card">
            <div className="quotes-image-title">Cocteau</div>
            <div className="quotes-image-description">
              A different way to portray reflection
            </div>
            <Zoom>
              <img
                src={CocteauQuote}
                alt="cocteau-quote"
                className="quotes-image"
              />
            </Zoom>
          </div>
        </div>
        <div className="quotes-row">
          <div className="quotes-card">
            <div className="quotes-image-title">Sagmeister</div>
            <div className="quotes-image-description">
              Combining sketching with graphic design
            </div>
            <Zoom>
              <img
                src={RembrandtQuote}
                alt="rembrandt-quote"
                className="quotes-image"
              />
            </Zoom>
          </div>
          <div className="quotes-card">
            <div className="quotes-image-title">Warhol</div>
            <div className="quotes-image-description">Warhol and the media</div>
            <Zoom>
              <img
                src={WarholQuote}
                alt="warhol-quote"
                className="quotes-image"
              />
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
