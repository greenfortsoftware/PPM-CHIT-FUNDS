// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import OwnerCard from "./OwnerCard";

// import "swiper/css";
// import "swiper/css/pagination";

// const slides = [
//   "/images/banner1.png",
//   "/images/banner2.png",
//   "/images/banner3.png",
// ];

// const HeroSection = () => {
//   return (
//     <section className="bg-[#0B3D91]">
//       <div className="grid grid-cols-1 lg:grid-cols-[100%_350px] gap-6 max-w-7xl mx-auto px-4 py-8">
//         {/* Banner Slider */}
//         <div className="relative">
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             loop
//             className="h-full"
//           >
//             {slides.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={image}
//                   alt={`Banner ${index + 1}`}
//                   // className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
//                   className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-contain bg-white"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Desktop Owner Card */}
//         {/* <div className="hidden lg:flex bg-[#0B3D91] items-center justify-center p-6">
//           <OwnerCard />
//         </div> */}
//       </div>

//       {/* Mobile & Tablet Owner Card */}
//       {/* <div className="lg:hidden bg-[#0B3D91] p-4 flex justify-center">
//         <OwnerCard />
//       </div> */}
//     </section>
//   );
// };

// export default HeroSection;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import OwnerCard from "./OwnerCard";

// import "swiper/css";
// import "swiper/css/pagination";

// const slides = [
//   "/images/banner1.png",
//   "/images/banner2.png",
//   "/images/banner3.png",
// ];

// const HeroSection = () => {
//   return (
//     <section>
//       {/* Banner Slider */}
//       <div className="relative">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           loop
//           className="h-full"
//         >
//           {slides.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}
//                 alt={`Banner ${index + 1}`}
//                 className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-contain"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Desktop Owner Card */}
//       {/* <div className="hidden lg:flex bg-[#0B3D91] items-center justify-center p-6">
//         <OwnerCard />
//       </div> */}

//       {/* Mobile & Tablet Owner Card */}
//       {/* <div className="lg:hidden bg-[#0B3D91] p-4 flex justify-center">
//         <OwnerCard />
//       </div> */}
//     </section>
//   );
// };

// export default HeroSection;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import OwnerCard from "./OwnerCard";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "/images/new.png",
  // "/images/banner1.png",
  "/images/banner2.png",
  "/images/banner3.png",
  "/images/banner4.png",
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
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-auto block"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Owner Card */}
      {/* <div className="hidden lg:flex bg-[#0B3D91] items-center justify-center p-6">
        <OwnerCard />
      </div> */}

      {/* Mobile & Tablet Owner Card */}
      {/* <div className="lg:hidden bg-[#0B3D91] p-4 flex justify-center">
        <OwnerCard />
      </div> */}
    </section>
  );
};

export default HeroSection;
