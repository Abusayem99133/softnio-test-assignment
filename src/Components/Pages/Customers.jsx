import { FaQuoteLeft } from "react-icons/fa";
import check from "../../assets/about/about2/icons8-checkbox-16.png";
import userImage from "../../assets/icon/Image (5).png";
import cardImage from "../../assets/icon/Group.svg";
import bgImage1 from "../../assets/about/about2/12.png";
import bgImage2 from "../../assets/about/about2/817344e5326be29f84754f858123edd4.png";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Customers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto mt-12">
        {/* Section Heading */}
        <p className="flex text-[#c52a1e] items-center gap-1 font-bold ">
          <img className="bg-[#c52a1e] w-3" src={check} alt="Check icon" />
          Crispy, Every Bite Taste
        </p>
        <h1 className="text-2xl md:text-3xl font-bold my-4">
          What Some Of My Customers Say
        </h1>
        <div className=" hidden md:block ">
          <button
            ref={prevRef}
            className="text-xl font-bold mr-5 text-black btn btn-circle bg-white shadow-md hover:bg-gray-100"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="text-xl font-bold text-[#c52a1e] btn btn-circle bg-white shadow-md hover:bg-gray-100"
          >
            <IoIosArrowForward />
          </button>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center">
              {/* Testimonial Card */}
              <div className="bg-[#febf00] w-full lg:w-1/2  relative p-[30px] md:p-[98px] lg:p-[97px] xl:p-[195px] z-10">
                <p className="md:text-xl text-white flex gap-2 mb-8">
                  <span className="md:text-2xl font-bold text-white ">
                    <FaQuoteLeft />
                  </span>
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would definitely recommend it.
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <h3 className="uppercase font-bold text-lg text-white">
                      Khalid Al Dawsry
                    </h3>
                    <span className="text-white">Jeddah, Saudi</span>
                  </div>
                  <img
                    className="md:w-12 md:h-12 rounded-full"
                    src={userImage}
                    alt="User"
                  />
                </div>
                <div className="absolute">
                  <progress
                    className="progress progress-error w-20 md:w-24 h-2 z-10  bg-white -right-44 md:-right-[415px] lg:-right-[180px] mt-3 md:mt-3"
                    value="100"
                    max="100"
                  ></progress>
                </div>
                <progress
                  className="progress max-w-full h-1 mt-4 bg-white"
                  value="100"
                  max="100"
                ></progress>
                {/* Decorative Card Icon */}
                <div className="absolute bottom-[1px]  left-0 md:left-1 ">
                  <img
                    className="w-7 md:w-20 lg:w-20"
                    src={cardImage}
                    alt="Decorative Icon"
                  />
                </div>
              </div>

              {/* Video Section */}
              <div
                className="relative w-full lg:w-1/2"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full z-10"
                  src="https://www.youtube.com/embed/DzSSUU37ynQ?si=HrHxbrHzerW0hnhv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center">
              {/* Testimonial Card */}
              <div className="bg-[#febf00] w-full lg:w-1/2  relative p-[30px] md:p-[98px] lg:p-[97px] xl:p-[195px] z-10">
                <p className="md:text-xl text-white flex gap-2 mb-8">
                  <span className="md:text-2xl font-bold text-white ">
                    <FaQuoteLeft />
                  </span>
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would definitely recommend it.
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <h3 className="uppercase font-bold text-lg text-white">
                      Khalid Al Dawsry
                    </h3>
                    <span className="text-white">Jeddah, Saudi</span>
                  </div>
                  <img
                    className="md:w-12 md:h-12 rounded-full"
                    src={userImage}
                    alt="User"
                  />
                </div>
                <div className="absolute">
                  <progress
                    className="progress progress-error w-20 md:w-24 h-2 z-10  bg-white -right-44 md:-right-[415px] lg:-right-[180px] mt-3 md:mt-3"
                    value="100"
                    max="100"
                  ></progress>
                </div>
                <progress
                  className="progress max-w-full h-1 mt-4 bg-white"
                  value="100"
                  max="100"
                ></progress>
                {/* Decorative Card Icon */}
                <div className="absolute bottom-[1px]  left-0 md:left-1 ">
                  <img
                    className="w-7 md:w-20 lg:w-20"
                    src={cardImage}
                    alt="Decorative Icon"
                  />
                </div>
              </div>

              {/* Video Section */}
              <div
                className="relative w-full lg:w-1/2"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full z-10"
                  src="https://www.youtube.com/embed/DzSSUU37ynQ?si=HrHxbrHzerW0hnhv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center">
              {/* Testimonial Card */}
              <div className="bg-[#febf00] w-full lg:w-1/2  relative p-[30px] md:p-[98px] lg:p-[97px] xl:p-[195px] z-10">
                <p className="md:text-xl text-white flex gap-2 mb-8">
                  <span className="md:text-2xl font-bold text-white ">
                    <FaQuoteLeft />
                  </span>
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would definitely recommend it.
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <h3 className="uppercase font-bold text-lg text-white">
                      Khalid Al Dawsry
                    </h3>
                    <span className="text-white">Jeddah, Saudi</span>
                  </div>
                  <img
                    className="md:w-12 md:h-12 rounded-full"
                    src={userImage}
                    alt="User"
                  />
                </div>
                <div className="absolute">
                  <progress
                    className="progress progress-error w-20 md:w-24 h-2 z-10  bg-white -right-44 md:-right-[415px] lg:-right-[180px] mt-3 md:mt-3"
                    value="100"
                    max="100"
                  ></progress>
                </div>
                <progress
                  className="progress max-w-full h-1 mt-4 bg-white"
                  value="100"
                  max="100"
                ></progress>
                {/* Decorative Card Icon */}
                <div className="absolute bottom-[1px]  left-0 md:left-1 ">
                  <img
                    className="w-7 md:w-20 lg:w-20"
                    src={cardImage}
                    alt="Decorative Icon"
                  />
                </div>
              </div>

              {/* Video Section */}
              <div
                className="relative w-full lg:w-1/2"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full z-10"
                  src="https://www.youtube.com/embed/DzSSUU37ynQ?si=HrHxbrHzerW0hnhv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex gap-8 md:hidden justify-center mt-4">
          <button
            ref={prevRef}
            className="text-2xl font-bold text-black btn btn-circle bg-white shadow-md hover:bg-gray-100"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="text-2xl font-bold text-[#c52a1e] btn btn-circle bg-white shadow-md hover:bg-gray-100"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Background Images for Larger Screens */}
      <div className="absolute bottom-[56px] xl:-right-[54px] 2xl:right-[1px] hidden 2xl:block">
        <img
          className="xl:w-[50%] 2xl:w-[90%]"
          src={bgImage1}
          alt="Background Design"
        />
      </div>
      <div className="absolute bottom-[450px] -left-28 hidden 2xl:block">
        <img className="w-[45%]" src={bgImage2} alt="Background Design" />
      </div>
    </div>
  );
};

export default Customers;
