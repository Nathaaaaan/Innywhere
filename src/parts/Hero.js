import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";
export default function Hero(props) {
  function ExploreNow() {
    window.scrollTo({
      // top: (props.refFindCities.current.offsetTop = 30),
      // behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 566 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-10">
            Meet and stay with locals from <br />
            hundreds of different cultures.
          </h1>
          <h6 className="mb-5 font-weight-light text-gray-500 w-10">
            I don't know what to put here, I'll come back later!
          </h6>
          <Button
            className="btn px-5"
            type="link"
            hasShadow
            isPrimary
            onClick={ExploreNow}
          >
            Explore Me
          </Button>

          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: 35 }}>
              <h6 className="mt-3">
                {props.data.members} <br />
                <span className="text-gray-500 font-weight-light">members</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <h6 className="mt-3">
                {props.data.cities} <br />
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
            <div className="col-auto">
              <h6 className="mt-3">
                {props.data.events} <br />
                <span className="text-gray-500 font-weight-light">events</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
