import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

function Carousal() {
  const images = ["Anshika.jpeg", "intro.png"];
  return (
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showThumbs={false}
      showStatus="false"
      className="w-50 m-auto"
    >
      {images.map((image) => {
        return (
          <div key={image} className="postImageWrapper1">
            <img src={require("../../assets/" + image)} alt="BlogImage" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Carousal;
