import React from "react";
import { Button, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const ABCD = () => {
  const fakeData = [
    {
      id: 1,
      name: "ADVERTISING",
      image:
        "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Advertsing.png",
    },
    {
      id: 2,
      name: "DIGITAL",
      image:
        "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Digital.png",
    },
    {
      id: 3,
      name: "CONSULTANCY",
      image:
        "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Consultancy.png",
    },
    {
      id: 4,
      name: "HEALTHCARE",
      image:
        "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Healthcare.png",
    },
    {
      id: 5,
      name: "EXPERIENTIAL",
      image:
        "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Experntial.png",
    },
    // {
    //   id: 1,
    //   name: "ADVERTISING",
    //   image:
    //     "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Consultancy.png",
    // },
    // {
    //   id: 1,
    //   name: "ADVERTISING",
    //   image:
    //     "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Consultancy.png",
    // },
    // {
    //   id: 1,
    //   name: "ADVERTISING",
    //   image:
    //     "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Consultancy.png",
    // },
    // {
    //   id: 1,
    //   name: "ADVERTISING",
    //   image:
    //     "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Consultancy.png",
    // },
    // {
    //   id: 1,
    //   name: "ADVERTISING",
    //   image:
    //     "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:300/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/Consultancy.png",
    // },
  ];

  const images = [
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:auto/h:auto/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/03/ubi-mockup2.jpg",
    "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:auto/h:auto/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/04/IMG-20230410-WA0006.jpg",
    "https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:auto/h:auto/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2023/04/UBI-cover-1.jpg",
  ];
  return (
    <div className="mt-5 py-5" style={{ backgroundColor: "#F8F7F8" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <div
            style={{
              height: "4px",
              width: "100px",
              display: "block",
              backgroundColor: "red",
              marginTop: "28px",
            }}
          ></div>
          <h1>
            We are a multi-functional agency with multi- <br />
            segment capabilities in multimedia platforms.
          </h1>
        </div>
        <div className="mt-4">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 20,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            autoPlay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {fakeData.map((s) => (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={s.image} alt="" height="200px" />
                <h3 className="mt-2">{s.name}</h3>
              </div>
            ))}
          </Carousel>
        </div>
        <hr />
        <div className="pt-5">
          <h4>Latest Updates</h4>
          <div className="mt-4">
            <Carousel
              showDots
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 20,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              autoPlay
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {images.map((s) => (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img src={s} alt="" height="200px" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="mt-5 d-flex gap-4 justify-content-between">
            <p className="fs-2">
              Our campaigns are a result of creative release, insightful
              strategy, constant brainstorming, lucid communication and clever
              design.
            </p>
            <Button style={{ height: "60px", width: "200px" }}>
              Check All
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ABCD;
