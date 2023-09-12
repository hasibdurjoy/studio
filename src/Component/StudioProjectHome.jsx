import React from "react";
import Banner from "./Banner";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import ContactUs from "./ContactUs";
import ContactUsForm from "./ContactMe";
import AboutUs from "./AboutUs";

const StudioProjectHome = () => {
  return (
    <div>
      <Banner />
      {/* <AboutUs /> */}
      <WhoWeAre />
      <WhatWeDo />
      <ContactUsForm />
      <ContactUs />
    </div>
  );
};

export default StudioProjectHome;
