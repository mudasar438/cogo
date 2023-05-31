import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style1.css";

// import required modules
import { Pagination } from "swiper";
import { Round1 } from "./Round1";
export default function RoundSwiper() {
  return (
    <>
      <div className=" w-full h-[600px] md:h-[400px]">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
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
