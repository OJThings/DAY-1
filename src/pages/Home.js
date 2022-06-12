import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { InfoData } from "../data/InfoData";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <div>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </div>
  );
};

export default Home;
