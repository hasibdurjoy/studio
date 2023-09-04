import React from "react";
import Banner from "./Banner";
import About from "./About";
import Experiences from "./Experiences";
import Services from "./Services";

const HomePageOverview = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experiences />
      <Services />
    </div>
  );
};

export default HomePageOverview;
