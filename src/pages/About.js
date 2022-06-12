import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { SliderDataTwo } from "../data/SliderData";
import Hero from "../components/Hero";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderDataTwo} />
    </div>
  );
};

export default About;
