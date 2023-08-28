import React from "react";
import Banner from "./Banner";
import SocialMediaLinks from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import Service from "./Service";
import Footer from "./Footer";

const HomePageOverview = () => {
    return (
        <div>
            <Banner />
            <SocialMediaLinks></SocialMediaLinks>
            <WhyChooseUs></WhyChooseUs>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default HomePageOverview;
