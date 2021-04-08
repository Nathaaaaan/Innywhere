import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";
export default function Hero(props) {
  function ExploreNow() {
    window.scrollTo();
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
            Location
          </h6>
          <Button
            className="btn-px-5"
            type="link"
            hasShadow
            isPrimary
            onClick={ExploreNow}
          >
            Explore Me
          </Button>
        </div>
      </div>
    </section>
  );
}
