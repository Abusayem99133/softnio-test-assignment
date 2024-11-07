import img1 from "../../assets/about/Group 1707477980.png";
import img2 from "../../assets/about/Group 1707477980 (1).png";
import img3 from "../../assets/about/Group 1707477980 (2).png";
import siteImage from "../../assets/about/Frame 1707478071.png";
const MoreAbout = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-6  relative p-6">
        <div className="flex items-center">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <h3 className="uppercase font-bold">Fast Delivery</h3>
            <p>Within 30 minutes</p>
          </div>
        </div>
        <div className="flex items-center ">
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <h3 className="uppercase font-bold">Absolute dining</h3>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <h3 className="uppercase font-bold">Pickup Delivery</h3>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
      <div className="hidden xl:block absolute right-1 -mt-96">
        <img className="" src={siteImage} alt="" />
      </div>
    </section>
  );
};

export default MoreAbout;
