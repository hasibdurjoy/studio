import React from "react";
import Banner from "./Banner";
import SocialMediaLinks from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";

const HomePageOverview = () => {
    return (
        <div>
            <Banner />
            <SocialMediaLinks></SocialMediaLinks>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default HomePageOverview;
