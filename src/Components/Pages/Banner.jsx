import bgBanner from "../../assets/banner/Rectangle 4.png";
import banner from "../../assets/banner/134a1d5ba19b25b4daf3a6c032ddbd7a.jpeg";
import offer from "../../assets/banner/Frame 1707478070.png";
import victor from "../../assets/banner/Vector.png";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-[#c52a1e] p-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgBanner})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto mt-20 md:mt-40 xl:mt-32">
        <div className="absolute hidden md:block md:top-72 md:right-12  text-black  rounded-full font-semibold">
          <img src={victor} alt="" />
        </div>
        {/* <div className="flex flex-col md:flex-row py-32 items-center justify-between relative">
        
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 z-10 ">
            <h1 className="uppercase text-[23px] xl:text-[58px] font-bold bg-[#c52a1e] bg-opacity-30 pr-8 text-white">
              Taste The Authentic <br />
              Saudi Cuisine
            </h1>

            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-4 border-2 p-2">
              Among the best Saudi Chefs in the world. Serving you something
              beyond flavor.
            </p>
            <button className="py-2 px-4 bg-[#febf00] uppercase font-bold my-4">
              Explore Menu
            </button>
          </div>

        
          <div className="relative flex justify-center md:justify-end w-full">
            <img className="w-[70%]" src={banner} alt="Saudi Cuisine" />
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row items-center justify-center  text-white  ">
          <div className=" lg:text-left  space-y-32 xl:space-y-6 ">
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight bg-[#c52a1e] bg-opacity-25 z-10 absolute md:-mt-20 xl:-mt-32 pr-8">
              TASTE THE AUTHENTIC <br />
              SAUDI CUISINE
            </h1>
            <p className="text-lg md:text-xl ">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="bg-[#febf00] text-black px-6 py-3 rounded font-semibold hover:bg-[#febf10] transition duration-200">
              EXPLORE MENU
            </button>
          </div>

          <div className="w-11/12 flex items-center justify-center relative mt-8 lg:mt-0">
            <img
              src={banner}
              alt="Saudi Cuisine"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-[#febf00] text-black  rounded-full font-semibold">
              <img src={offer} alt="" />
            </div>
            <div className="absolute  md:hidden  md:top-72 md:right-12  text-black  rounded-full font-semibold">
              <img src={victor} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
