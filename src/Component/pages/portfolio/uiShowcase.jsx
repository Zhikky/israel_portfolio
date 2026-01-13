import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import showcase1 from "../../../assets/uiShowcase/showcase1.png";
import showcase2 from "../../../assets/uiShowcase/showcase2.png";
import showcase3 from "../../../assets/uiShowcase/showcase3.png";
import showcase4 from "../../../assets/uiShowcase/showcase4.png";
import showcase5 from "../../../assets/uiShowcase/showcase5.png";
import showcase6 from "../../../assets/uiShowcase/showcase6.png";
import showcase7 from "../../../assets/uiShowcase/showcase7.png";
import showcase8 from "../../../assets/uiShowcase/showcase8.png";
import showcase9 from "../../../assets/uiShowcase/showcase9.png";
import showcase10 from "../../../assets/uiShowcase/showcase10.png";

export default function UiShowcase() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <div className="flex flex-col relative justify-between gap-8 sm:gap-12 lg:gap-16 w-full h-fit max-w-[1140px] mt-40 sm:mt-40 md:mt-56 lg:mt-75 mb-20 sm:mb-32 md:mb-44 lg:mb-60 px-9 sm:px-0">
      <h2 className="font-vina-sans text-2xl sm:text-3xl lg:text-4xl tracking-[-2%] text-white">
        UI Showcase
      </h2>

      <button
        ref={prevRef}
        className="swiper-button-prev absolute left-4 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex items-center justify-center"
      >
        <svg
          className="swiper-navigation-icon w-3 sm:w-4"
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
        >
          <path
            d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <button
        ref={nextRef}
        className="swiper-button-next absolute right-4 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex items-center justify-center"
      >
        <svg
          className="swiper-navigation-icon w-3 sm:w-4"
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
        >
          <path
            d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div className="flex flex-col justify-between w-full py-8 px-6 sm:py-12 sm:px-12 md:py-16 md:px-24 lg:py-18.75 lg:px-45 gap-8 sm:gap-12 lg:gap-16 rounded-xl sm:rounded-2xl bg-[#2E2E2E]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          autoplay={{
            delay: 3300,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
          }}
        >
          <SwiperSlide>
            <img
              src={showcase1}
              alt="UI showcase 1"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase2}
              alt="UI showcase 2"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase3}
              alt="UI showcase 3"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase4}
              alt="UI showcase 4"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase5}
              alt="UI showcase 5"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase6}
              alt="UI showcase 6"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase7}
              alt="UI showcase 7"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase8}
              alt="UI showcase 8"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase9}
              alt="UI showcase 9"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={showcase10}
              alt="UI showcase 10"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-132 object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        ref={paginationRef}
        className="swiper-pagination !relative !bottom-0 mt-2 sm:mt-4"
      />
    </div>
  );
}