import React from "react";
import Banner from "./Banner";
import About from "./About";
import ABCD from "./ABCD";
import Campaigns from "./Campaigns";

const HomePageOverview = () => {
  return (
    <div>
      <Banner />
      <About />
      <ABCD />
      <Campaigns />
    </div>
  );
};

export default HomePageOverview;
