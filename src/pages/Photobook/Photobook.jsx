import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";

import logo597 from "../../assets/photobook/597.svg";
import Page1 from "../../assets/photobook/photobook1.jpg";
import Page2 from "../../assets/photobook/photobook2.jpg";
import Page3 from "../../assets/photobook/photobook3.jpg";
import Page4 from "../../assets/photobook/photobook4.jpg";
import Page5 from "../../assets/photobook/photobook5.jpg";
import Page6 from "../../assets/photobook/photobook6.jpg";
import Page7 from "../../assets/photobook/photobook7.jpg";
import Page8 from "../../assets/photobook/photobook8.jpg";
import Page9 from "../../assets/photobook/photobook9.jpg";
import Page10 from "../../assets/photobook/photobook10.jpg";
import Page11 from "../../assets/photobook/photobook11.jpg";
import Page12 from "../../assets/photobook/photobook12.jpg";
import Page13 from "../../assets/photobook/photobook13.jpg";
import Page14 from "../../assets/photobook/photobook14.jpg";
import Page15 from "../../assets/photobook/photobook15.jpg";
import Page16 from "../../assets/photobook/photobook16.jpg";

import NavBar from "../../components/NavBar/NavBar";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Photobook.css";

const Photobook = () => {
  return (
    <div className="photobook-page">
      <NavBar />
      <div className="photobook-details">
        <div className="icon-597">
          <img src={logo597} alt="597 logo" className="logo-597" />
        </div>
        <div className="photobook-info">
          A photo journey in Thessaloniki and Istanbul. The distance between
          these cities is just 597 km.
        </div>
        <div className="photobook-info">
          597 χλμ. χωρίζουν τη Θεσσαλονίκη από την Κωνσταντινούπολη. Ένα ταξίδι
          σε δύο πόλεις που τις έδεσε η ιστορία.
        </div>
      </div>
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
          <LazyLoadImage
            effect="blur"
            src={Page1}
            alt="page-2"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page2}
            alt="page-3"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page3}
            alt="page-4"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page4}
            alt="page-5"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page5}
            alt="page-6"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page6}
            alt="page-7"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page7}
            alt="page-8"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page8}
            alt="page-9"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page9}
            alt="page-10"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page10}
            alt="page-12"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page11}
            alt="page-13"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page12}
            alt="page-14"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page13}
            alt="page-15"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page14}
            alt="page-16"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page15}
            alt="page-17"
            className="photobook-page-slide-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            src={Page16}
            className="photobook-page-slide-image"
            alt="page-16"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Photobook;
