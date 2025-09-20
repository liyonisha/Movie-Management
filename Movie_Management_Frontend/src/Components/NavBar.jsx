import React from "react";
import logoImage from "../Components/Assets/3.png";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";



const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ borderRadius: "2px", backgroundColor: "#313131" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: "#ffffff" }}>
          <img
            src={logoImage}
            alt="InfiniteFlicks Logo"
            className="logo me-1"
            style={{ width: "55px", height: "auto", borderRadius: "10px" }}
          />
          Flicks
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/ListMovie"
                style={{ color: "#ffffff" }}
              >
                <BiSolidCameraMovie className="icon me-1 mb-1" />
               Movies
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link " href="/AddNewMovie" style={{ color: "#ffffff" }} >
              <FaPlus  className="icon me-1 mb-1" />
                AddMovie
              </a>
            </li>
            
            
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
