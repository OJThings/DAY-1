import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { InfoData } from "../data/InfoData";
import { SliderData } from "../data/SliderData";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </div>
  );
};

export default Home;
