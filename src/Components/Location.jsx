import React from "react";
import { Container } from "react-bootstrap";

const Location = () => {
  const fakeData = [
    {
      id: 1,
      name: "Ontario, Canada",
      det: "1450 Meyerside Drive, Mississauga, Ontariio",
      loc: "https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed",
    },
    {
      id: 1,
      name: "Ontario, Canada",
      det: "1450 Meyerside Drive, Mississauga, Ontariio",
      loc: "https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed",
    },
    {
      id: 1,
      name: "Ontario, Canada",
      det: "1450 Meyerside Drive, Mississauga, Ontariio",
      loc: "https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed",
    },
    {
      id: 1,
      name: "Ontario, Canada",
      det: "1450 Meyerside Drive, Mississauga, Ontariio",
      loc: "https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed",
    },
  ];
  return (
    <div>
      <Container>
        <div className="d-flex align-items-center gap-4">
          <h4 className="text-success">Canada, Brazil, Jamaica</h4>
          <div
            style={{
              display: "block",
              width: "100px",
              height: "2px",
              backgroundColor: "green",
            }}
          ></div>
        </div>
        <h1>Our Locations</h1>
        <img
          src="https://istratsolutions.com/wp-content/uploads/2022/07/our-locations-1-1024x614.png"
          alt=""
        />
        <div className="d-flex gap-4">
          {fakeData.map((s) => (
            <div>
              <h3 className="text-center">{s.name}</h3>
              <h4 className="text-center">{s.det}</h4>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    src={s.loc}
                    id="gmap_canvas"
                    frameborder="0"
                    scrolling="no"
                    width="300"
                    height="450"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Location;
