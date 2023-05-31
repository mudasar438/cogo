import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style1.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Round1 } from "./Round1";
export default function RoundSwiper() {
  return (
    <>
      <div className=" w-full h-[400px]">
        <Swiper
          //   pagination={{
          //     type: "progressbar",
          //   }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Round1 />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Round1 />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Round1 />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Round1 />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Round1 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
