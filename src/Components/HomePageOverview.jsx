import React from "react";
import Banner from "./Banner";
import About from "./About";
import Experiences from "./Experiences";
import Services from "./Services";
import ChooseUs from "./ChooseUs";
import History from "./History";
import Contact from "./Contact";

const HomePageOverview = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experiences />
      <Services />
      <ChooseUs />
      <History />
      <Contact />
    </div>
  );
};

export default HomePageOverview;
