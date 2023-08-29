import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Agency from "./Agency";
import Offerings from "./Offerings";
import MarketingServices from "./MarketingServices";

const HomePageOverview = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Agency />
      <Offerings />
      <MarketingServices />
    </div>
  );
};

export default HomePageOverview;
