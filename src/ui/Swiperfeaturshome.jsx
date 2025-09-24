import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function FeatureSwiper() {
  const features = [
    { title: "Modern Kitchen", image: "/kitchen.png" },
    { title: "Luxury Bathroom", image: "/Homeserv3.png" },
    { title: "Cozy Living Room", image: "/Homesrv2.png" },
    { title: "Spacious Bedroom", image: "/header_img.png" },
    { title: "Cozy Living Room", image: "/Homesrv2.png" },
    { title: "Spacious Bedroom", image: "/header_img.png" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-2xl"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 duration-700">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#3E5F44]">
                  {feature.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
