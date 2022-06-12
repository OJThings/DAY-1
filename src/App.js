import { useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Navbar toggle={toggle} />
        <GlobalStyle />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero slides={SliderData} />
        <InfoSection {...InfoData} />
        <MessengerCustomerChat
          pageId="100127545623072"
          appId="3011002265787057"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
