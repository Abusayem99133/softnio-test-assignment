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
        <div className="absolute hidden md:block md:top-[500px] xl:top-[740px] md:right-12 xl:right-12  text-black  rounded-full font-semibold ">
          <img src={victor} alt="" />
        </div>

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
            <div className="absolute  md:hidden  -top-6 right-1 xl:  text-black  rounded-full font-semibold">
              <img src={victor} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
