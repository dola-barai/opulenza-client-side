import React from "react";
// import components

import Hero from "./components/Hero";

import Menu from "./components/Menu";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Team />
      <Testimonial />
      <Footer />
      <div className="h-[380px] md:h-[370px]"></div>
    </div>
  );
};

export default App;
