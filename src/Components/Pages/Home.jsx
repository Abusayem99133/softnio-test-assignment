import Banner from "./Banner";
import BookTable from "./BookTable";
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
      <div>
        <BookTable />
      </div>
    </div>
  );
};

export default Home;
