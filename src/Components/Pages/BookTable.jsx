import check from "../../assets/about/about2/icons8-checkbox-16.png";
import bgImage1 from "../../assets/about/about2/f8e8eeffdc29691099a68fb261320bfa.jpeg";

import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const BookTable = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-20 md:py-40 lg:py-40"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${bgImage1})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <p className="flex text-[#c52a1e] items-center gap-1 font-bold">
              <img className="bg-[#c52a1e] w-3" src={check} alt="" />
              Book Now
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Book Your Table
            </h1>
            <p className="text-white mt-4 md:mt-8">
              Book your table fast and simply at our à la carte restaurants and
              enjoy a feast for all the senses! Please note that each restaurant
              can be booked only once during meal for each week of stay.
            </p>
            <div>
              <div className="mt-6 md:mt-12">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="border p-2 w-full md:w-[48%] bg-[#1a1a1a] bg-opacity-15 placeholder:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="border p-2 w-full md:w-[48%] bg-[#1a1a1a] bg-opacity-15 placeholder:text-white"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <label className="w-full md:w-[48%]">
                    <input
                      type="date"
                      className="border p-2 w-full bg-[#1a1a1a] bg-opacity-15 text-white placeholder:text-white"
                      placeholder="Reservation Date"
                    />
                  </label>
                  <input
                    type="number"
                    placeholder="Total People"
                    className="border p-2 w-full md:w-[48%] bg-[#1a1a1a] bg-opacity-15 placeholder:text-white"
                  />
                </div>
                <textarea
                  className="border border-white p-2 w-full h-32 mt-4 bg-[#1a1a1a] bg-opacity-15 placeholder:text-white"
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="py-3 px-4 bg-[#febf00] uppercase font-bold mt-4 md:mt-6 ">
                Book Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
