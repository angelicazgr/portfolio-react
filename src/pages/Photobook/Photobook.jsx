import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import Page2 from "../../assets/photobook/photobook2.jpg";
import Page3 from "../../assets/photobook/photobook3.jpg";
import Page4 from "../../assets/photobook/photobook4.jpg";
import Page5 from "../../assets/photobook/photobook5.jpg";
import Page6 from "../../assets/photobook/photobook6.jpg";
import Page7 from "../../assets/photobook/photobook7.jpg";
import Page8 from "../../assets/photobook/photobook8.jpg";
import Page9 from "../../assets/photobook/photobook9.jpg";
import Page10 from "../../assets/photobook/photobook10.jpg";
import Page12 from "../../assets/photobook/photobook12.jpg";
import Page13 from "../../assets/photobook/photobook13.jpg";
import Page14 from "../../assets/photobook/photobook14.jpg";
import Page15 from "../../assets/photobook/photobook15.jpg";
import Page16 from "../../assets/photobook/photobook16.jpg";
import Page17 from "../../assets/photobook/photobook17.jpg";
import Page18 from "../../assets/photobook/photobook18.jpg";
import Page19 from "../../assets/photobook/photobook19.jpg";

import NavBar from "../../components/NavBar/NavBar";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Photobook.css";

const Photobook = () => {
  return (
    <div className="photobook-page">
      <NavBar />
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <img
            src={Page2}
            alt="page-2"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page3}
            alt="page-3"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page4}
            alt="page-4"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page5}
            alt="page-5"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page6}
            alt="page-6"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page7}
            alt="page-7"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page8}
            alt="page-8"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page9}
            alt="page-9"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page10}
            alt="page-10"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page12}
            alt="page-12"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page13}
            alt="page-13"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page14}
            alt="page-14"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page15}
            alt="page-15"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page16}
            alt="page-16"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page17}
            alt="page-17"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page18}
            alt="page-18"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Page19}
            alt="page-19"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Photobook;
