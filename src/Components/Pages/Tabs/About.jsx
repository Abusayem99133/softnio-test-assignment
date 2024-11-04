import { FiPhoneCall } from "react-icons/fi";

const About = () => {
  return (
    <div>
      <div>
        <h1 className="uppercase text-2xl font-bold mt-5">
          Exceptional Culinary Experience And Delicious Food
        </h1>
        <p className="my-4">
          A top 50 restaurant in Asia, and considered by some to be the best
          sushi restaurant in the world. It has 3 Michelin stars and is very
          popular, so reservations are hard to get.
        </p>
        <div className="flex  gap-4">
          <button className="uppercase bg-yellow-400 py-2 px-4 font-bold">
            About More
          </button>
          <span className="flex items-center gap-2 font-bold">
            {" "}
            <FiPhoneCall className="text-orange-600" /> +8801478568741
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
