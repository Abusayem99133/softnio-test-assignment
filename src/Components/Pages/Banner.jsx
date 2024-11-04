import bgBanner from "../../assets/banner/Rectangle 4.png";
import banner from "../../assets/banner/134a1d5ba19b25b4daf3a6c032ddbd7a.jpeg";
import vector from "../../assets/banner/Vector.png";
import offer from "../../assets/banner/Frame 1707478070.png";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat  bg-[#c52a1e] p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgBanner})`,
        backgroundSie: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row py-32 items-center justify-between ">
          <div className=" ">
            <h1 className="uppercase text-[23px] xl:text-[58px] font-bold xl:absolute xl:top-44 bg-[#c52a1e] bg-opacity-30 pr-8 text-white z-10">
              Taste The Authentic <br />
              Saudi Cuisine
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mt-48 ">
              Among the best Saudi Chefs in the world. Serving you something
              beyond flavor.
            </p>
            <button className="py-2 px-4 bg-[#febf00] uppercase font-bold my-4">
              Explore Menu
            </button>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <img className="w-[70%]" src={banner} alt="" />
            {/* "Today Offer" Badge */}
            {/* <div className="avatar absolute right-7 bottom-[155px] ">
              <div className="  bg-yellow-400 rounded-full  ">
                <img className="p-1" src={offer} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
