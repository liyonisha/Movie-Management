import React from "react";
import NavBar from "../Components/NavBar";
import Gallery from "../Components/Carousel/Gallery";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className="head mt-4">
      <h1 style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Welcome to Infinite Flicks</h1>
      </div>
      <Gallery />
    </div>
  );
};

export default Home;
