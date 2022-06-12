import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
 
  return (
    <>
      <Router>
      <GlobalStyle />
        
       
        <MessengerCustomerChat
          pageId="100127545623072"
          appId="3011002265787057"
        />
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
