import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import burger from "../../assets/about/about2/Frame 1707478074.png";
import pizza from "../../assets/about/about2/Frame 1707478074 (1).png";
import french from "../../assets/about/about2/Frame 1707478074 (2).png";
import chicken from "../../assets/about/about2/Frame 1707478074 (3).png";
import tomato from "../../assets/about/about2/f8e8eeffdc29691099a68fb261320bffa-removebg-preview.png";
import check from "../../assets/about/about2/icons8-checkbox-16.png";
import bgImage from "../../assets/about/Frame 1707478073.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FoodItems = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-[#fbf7f2] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header with custom navigation buttons */}
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <div>
            <p className="flex text-[#c52a1e] items-center gap-1 font-bold">
              <img className="bg-[#c52a1e] w-3" src={check} alt="" />
              Crispy, Every Bite Taste
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">
              Popular Food Items
            </h1>
          </div>
          <div className=" hidden md:block">
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
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white text-center p-4 rounded-lg shadow-lg h-72 flex flex-col  items-center">
              <img
                className="items-center mx-auto mb-4"
                src={burger}
                alt="Burger"
              />
              <progress
                className="progress progress-error w-20 h-1 mb-2"
                value="70"
                max="100"
              ></progress>
              <h3 className="uppercase font-bold text-xl my-2">
                Vegetables Burger
              </h3>
              <p>Barbecue Italian cuisine pizza</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white text-center p-4 rounded-lg shadow-lg h-72 flex flex-col  items-center">
              <img
                className="items-center mx-auto mb-4"
                src={pizza}
                alt="Pizza"
              />
              <progress
                className="progress progress-error w-20 h-1 mb-2"
                value="70"
                max="100"
              ></progress>
              <h3 className="uppercase font-bold text-xl my-2">
                Special Pizza
              </h3>
              <p>Barbecue Italian cuisine pizza</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white text-center p-4 rounded-lg shadow-lg h-72 flex flex-col  items-center">
              <img
                className="items-center mx-auto mb-4"
                src={french}
                alt="French Fries"
              />
              <progress
                className="progress progress-error w-20 h-1 mb-2"
                value="70"
                max="100"
              ></progress>
              <h3 className="uppercase font-bold text-xl my-2">
                Special French Fries
              </h3>
              <p>Barbecue Italian cuisine</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white text-center p-4 rounded-lg shadow-lg h-72 flex flex-col items-center">
              <img
                className="items-center mx-auto mb-4"
                src={chicken}
                alt="Chicken"
              />
              <progress
                className="progress progress-error w-20 h-1 mb-2"
                value="70"
                max="100"
              ></progress>
              <h3 className="uppercase font-bold text-xl my-2">
                Cuisine Chicken
              </h3>
              <p>Japanese Cuisine Chicken</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white text-center p-4 rounded-lg shadow-lg h-72 flex flex-col  items-center">
              <img
                className="items-center mx-auto mb-4 w-36 bg-white"
                src={tomato}
                alt="Tomato"
              />
              <progress
                className="progress progress-error w-20 h-1 mb-2"
                value="70"
                max="100"
              ></progress>
              <h3 className="uppercase font-bold text-xl my-2">
                Vegetables Burger
              </h3>
              <p>Barbecue Italian cuisine pizza</p>
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
      <div className="">
        <div className="absolute -mt-[340px] hidden md:block">
          <img src={bgImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
