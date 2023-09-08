import React from "react";
import Banner from "./Banner";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import ContactUs from "./ContactUs";
import ContactUsForm from "./ContactMe";

const StudioProjectHome = () => {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <WhatWeDo />
      <ContactUsForm />
      <ContactUs />
    </div>
  );
};

export default StudioProjectHome;
