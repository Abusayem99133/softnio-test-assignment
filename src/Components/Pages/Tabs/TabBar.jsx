import siteImage from "../../../assets/about/image.png";
import "react-tabs/style/react-tabs.css";
import Contact from "../Contact";
import About from "./About";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import { useState } from "react";
import Experience from "./Experience";

const TabBar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 p-6">
        <div>
          <img src={siteImage} alt="" />
        </div>
        <Tabs
          selectedIndex={selectedTab}
          onSelect={(index) => setSelectedTab(index)}
        >
          <TabList className="border-b-red-500 border-b-2 w-full flex bg-[#c52a1e]">
            <Tab
              className={`w-full text-center px-2 py-2 cursor-pointer transition-colors duration-300 ${
                selectedTab === 0
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              }`}
              selectedClassName="bg-red-500 text-white"
              style={{ outline: "none" }}
            >
              About
            </Tab>
            <Tab
              className={`w-full text-center px-4 py-2 cursor-pointer transition-colors duration-300 ${
                selectedTab === 1
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              }`}
              selectedClassName="bg-red-500 text-white"
              style={{ outline: "none" }}
            >
              Experience
            </Tab>
            <Tab
              className={`w-full text-center px-4 py-2 cursor-pointer transition-colors duration-300 ${
                selectedTab === 2
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              }`}
              selectedClassName="bg-red-500 text-white"
              style={{ outline: "none" }}
            >
              Contact
            </Tab>
          </TabList>

          <TabPanel>
            <div>
              <About />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Experience />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Contact />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabBar;
