import React from "react";

import BannerHero_ from "assets/images/banner-hero.jpg";
// import Star from "elements/Star";
import Button from "elements/Button";

export default function Banner() {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="banner-hero">
          <img src={BannerHero_} alt="" />
          {/* <img src={data.imageUrl} alt="" style={{ height: 260, width: 1110 }} /> */}
        </div>
          </div>
         
    </section>
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
