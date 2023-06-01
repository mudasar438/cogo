import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FcPrevious } from "react-icons/fc";
// import "./style1.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Round1 } from "./Round1";
export default function RoundSwiper() {
  const [swiperRef, setSwiperRef] = useState(null);
  console.log("swiper", swiperRef);

  const prevHandler = () => {
    if (swiperRef !== null) {
      swiperRef.slidePrev();
    }
  };

  const nextHandler = () => {
    if (swiperRef !== null) {
      swiperRef.slideNext();
    }
  };
  return (
    <>
      <div className=" w-full px-3 h-[700px] md:h-[400px]">
        <Swiper
          // pagination={{
          //   clickable: true,
          // }}
          // style={{
          //   "--swiper-navigation-color": "#fff",
          //   "--swiper-navigation-size": "12px",
          // }}
          // navigation={true}
          // modules={[Pagination, Navigation]}
          className="mySwiper"
          spaceBetween={50}
          onSwiper={(swiper) => setSwiperRef(swiper)}
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
        <div className="mt-3 flex justify-center items-center space-x-8">
          <button className="rounded-full" onClick={prevHandler}>
            <MdNavigateBefore className="text-[#fff] bg-[#292929] p-3 text-5xl rounded-full" />
          </button>
          <button onClick={nextHandler} className="rounded-full">
            <MdNavigateNext className="text-[#fff] bg-[#292929] p-3 text-5xl rounded-full" />
          </button>
        </div>
      </div>
    </>
  );
}
