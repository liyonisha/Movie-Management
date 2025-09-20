// UpdateMovie.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import './UpdateMovie.css';
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbCategoryFilled } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import NavBar from "./NavBar";

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    releaseDate: "",
    imdbRating: "",
  });

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieDataFromState = location.state;
        if (movieDataFromState) {
          setFormData(movieDataFromState);
        } else {
          const response = await axios.get(`http://localhost:8080/getMovie/${id}`);
          setFormData(response.data);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [id, location]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/updateMovie/${id}`, formData);
      console.log("Server Response:", response.data);

      navigate("/ListMovie");
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div><NavBar/>
    <div className='movie'>
      
      <div className='wrapper'>
        <form onSubmit={handleUpdate}>
          <h1>Update Movie</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder='Title'
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <BiSolidCameraMovie className='icon' />
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder='Genre'
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              required
            />
            <TbCategoryFilled className='icon' />
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder='Release Date'
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleInputChange}
              required
            />
            <MdDateRange className='icon' />
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder='Imdb Rating'
              name="imdbRating"
              value={formData.imdbRating}
              onChange={handleInputChange}
              required
            />
            <FaStar className='icon' />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div></div>
  );
};

export default UpdateMovie;
