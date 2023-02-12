import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import NoteTakingAppDetails from "./Details/NoteTakingAppDetails";
import FreeCodeCampApp from "./Details/FreeCodeCampApp";
import "./PersonalProject.css";

const Slides = [<NoteTakingAppDetails />, <FreeCodeCampApp />];

function PersonalProject() {
  SwiperCore.use([Navigation, Pagination]);

  const slides = Slides.map((item) => {
    return <SwiperSlide>{item}</SwiperSlide>;
  });

  return (
    <div className="work-experience" id="personalProjects">
      <div className="title-wrapper">
        <h1 className="work-experience-title">
          <span>Personal Projects</span>
        </h1>
      </div>

      <div className="carousal-wrapper">
        <Swiper
          className="carousal-slider"
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          key={3}
        >
          {/* <SwiperSlide>
            <NoteTakingAppDetails />
          </SwiperSlide>
          <SwiperSlide>
            <FreeCodeCampApp />
          </SwiperSlide>
          <SwiperSlide>
            <PersonalPortfolio />
          </SwiperSlide> */}
          {slides}
        </Swiper>
      </div>
    </div>
  );
}

export default PersonalProject;
