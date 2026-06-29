import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import OwnerCard from "./OwnerCard";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "/images/banner1.png",
  "/images/banner2.png",
  // "/images/banner3.png",
  // "/images/banner4.png",
];

const HeroSection = () => {
  return (
    <section>
      {/* Banner Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop
          autoHeight
          className="h-full"
        >
          {slides.map((image, index) => (
            // <SwiperSlide key={index}>
            //   <img
            //     src={image}
            //     alt={`Banner ${index + 1}`}
            //     className="w-full h-auto block"
            //   />
            // </SwiperSlide>

            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                title="Shengai PPM Chit Funds Pvt Ltd"
                className="w-full object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
