import Banner from "./Banner";
import FoodItems from "./FoodItems";
import MoreAbout from "./MoreAbout";
import TabBar from "./Tabs/TabBar";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto">
        <TabBar />
        <div>
          <MoreAbout />
        </div>
      </div>
      <div>
        <FoodItems />
      </div>
    </div>
  );
};

export default Home;
