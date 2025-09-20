import React from "react";
import "./Gallery.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container-home">
      <div className="home-gallery-container-body">
        <div className="home-gallery-container">
          <input
            className="slider-radio"
            type="radio"
            name="slider"
            id="item-1"
            defaultChecked
          />
          <input
            className="slider-radio"
            type="radio"
            name="slider"
            id="item-2"
          />
          <input
            className="slider-radio"
            type="radio"
            name="slider"
            id="item-3"
          />
          <input
            className="slider-radio"
            type="radio"
            name="slider"
            id="item-4"
          />
          <input
            className="slider-radio"
            type="radio"
            name="slider"
            id="item-5"
          />
          <div className="home-gallery-cards">
            <label className="home-gallery-card" htmlFor="item-1" id="image-1">
              <img src={img1} alt="slider pic" />
            </label>
            <label className="home-gallery-card" htmlFor="item-2" id="image-2">
              <img src={img2} alt="slider pic" />
            </label>
            <label className="home-gallery-card" htmlFor="item-3" id="image-3">
              <img src={img3} alt="slider pic" />
            </label>
            <label className="home-gallery-card" htmlFor="item-4" id="image-4">
              <img src={img4} alt="slider pic" />
            </label>
            <label className="home-gallery-card" htmlFor="item-5" id="image-5">
              <img src={img5} alt="slider pic" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
