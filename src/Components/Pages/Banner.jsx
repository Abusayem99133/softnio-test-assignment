import bgBanner from "../../assets/banner/Rectangle 4.png";
import banner from "../../assets/banner/Group 1707477993.png";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat  bg-[#c52a1e]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgBanner})`,
        backgroundSie: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="uppercase text-5xl font-bold absolute top-56 left-28 bg-[#c52a1e] text-white ">
          Taste The Authentic <br />
          Saudi Cuisine
        </h1>
        <div className="flex py-32 items-center">
          <div className="text-white">
            <p>
              Among the best Saudi Chefs in the world. Serving you something
              beyond flavor.
            </p>
            <button className="uppercase">Explore Menu</button>
          </div>
          <img className="w-[50%]" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
