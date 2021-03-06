import React from "react";
import Fade from "react-reveal/Fade";

import BannerHero_ from "assets/images/banner-hero.jpg";
// import Star from "elements/Star";

export default function Banner() {
  return (
    <Fade delay={300}>
      <section className="container">
        <div className="row justify-content-center">
          <div className="banner-hero">
            {/* <img src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`} alt="" /> */}
            <img src={BannerHero_} alt="" />
            {/* <img src={data.imageUrl} alt="" style={{ height: 260, width: 1110 }} /> */}
          </div>
        </div>
      </section>
    </Fade>
  );

  //   <section className="container">
  //       <div className="row align-items-center">
  //           <div className="col-auto" style={{ marginRight: 70 }}>
  //               <div className="banner-hero" style={{ margin: `30px 0 0 30px` }}>
  //                   <img src={data.imageUrl} alt="Banner Hero" className="position-absolute" />
  //               </div>
  //           </div>
  //       </div>

  // <Star value = {4.5} width = {35} height = {35} spacing = {3}> </Star>
  // </section>
}
