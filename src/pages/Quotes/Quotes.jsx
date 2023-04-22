import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import CarsonQuote from "../../assets/quotes/carson.jpg";
import CocteauQuote from "../../assets/quotes/cocteau.jpg";
import RembrandtQuote from "../../assets/quotes/rembrandt.jpg";
import WarholQuote from "../../assets/quotes/warhol.jpg";
import NavBar from "../../components/NavBar/NavBar";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Quotes.css";

const Quotes = () => {
  return (
    <div>
      <NavBar />
      <div className="quotes-slider-container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          centeredSlides={true}
          loop={true}
          zoom={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide>
            <img
              src={CarsonQuote}
              alt="carson-quote"
              className="quotes-slide-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CocteauQuote}
              alt="cocteau-quote"
              className="quotes-slide-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={RembrandtQuote}
              alt="rembrandt-quote"
              className="quotes-slide-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={WarholQuote}
              alt="warhol-quote"
              className="quotes-slide-image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Quotes;
