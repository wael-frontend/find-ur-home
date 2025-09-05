// src/components/Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CartList from "./CartList";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-xl h-[300px] relative  "
      >
        <SwiperSlide>
          <CartList />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
