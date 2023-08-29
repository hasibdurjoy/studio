import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Agency from "./Agency";
import Offerings from "./Offerings";

const HomePageOverview = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Agency />
      <Offerings />
    </div>
  );
};

export default HomePageOverview;
