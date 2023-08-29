import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Agency from "./Agency";
import Offerings from "./Offerings";
import MarketingServices from "./MarketingServices";
import WhyChooseUs from "./WhyChooseUs";

const HomePageOverview = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Agency />
      <Offerings />
      <MarketingServices />
      <WhyChooseUs />
    </div>
  );
};

export default HomePageOverview;
