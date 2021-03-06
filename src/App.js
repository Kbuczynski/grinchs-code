import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Program from "./components/Program";
import Organizers from "./components/Organizers";
import Footer from "./components/Footer";
import WhyIsWorth from "./components/WhyIsWorth";
import Join from "./components/Join";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <About />
      <WhyIsWorth/>
      <Program />
      <Join />
      <Organizers />
      <Footer />
    </div>
  );
};

export default App;
