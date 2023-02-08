import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import ExperienceDetailsInfosys from "../ExperienceDetails/ExperienceDetailsInfosys";
import "./WorkExperience.css";
import ExperienceDetailsAltair from "../ExperienceDetails/ExperienceDetailsAltair";

function WorkExperience() {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div className="work-experience" id="workExperience">
      <div className="title-wrapper">
        <h1 className="work-experience-title">
          <span>Work Experience</span>
        </h1>
      </div>

      <div className="carousal-wrapper">
        <Swiper
          className="carousal-slider"
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // key={4}
        >
          <SwiperSlide key={1}>
            <ExperienceDetailsInfosys />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <ExperienceDetailsAltair />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default WorkExperience;
