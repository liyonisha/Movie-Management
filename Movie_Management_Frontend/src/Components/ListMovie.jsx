import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListMovie.css";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NavBar from "./NavBar";

const MovieCard = ({ id, title, genre, releaseDate, imdbRating }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/UpdateMovie/${id}`, {
      state: {
        title,
        genre,
        releaseDate,
        imdbRating,
      },
    });
  };

  const handleDelete = () => {
    fetch(`http://localhost:8080/delete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.text())
    .then(data => {
      console.log(data);
      if (data.includes("Movie removed")) {
        console.log("Movie removed!!");
        window.location.reload();
      }
    })
    .catch(error => console.error(error));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body"></div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">Title: {title}</li>
        <li className="list-group-item">Genre: {genre}</li>
        <li className="list-group-item">Release Date: {releaseDate}</li>
        <li className="list-group-item">IMDB Rating: {imdbRating}</li>
      </ul>

      <div className="card-body">
        <button className="btn btn-secondary me-2" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

const ListMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <NavBar/>
    <div className="container mt-4">
      <h1 className="mb-4 text-white">Movies</h1>
      <div className="d-flex justify-content-end mb-4">
        <Link to="/AddNewMovie">
          <button className="btn btn-primary" type="submit">
            <FaPlus className="icon md-1 mb-1 me-1" />
            AddMovie
          </button>
        </Link>
      </div>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.title} className="col-md-4 mb-4">
            <MovieCard
              id={movie.id}  
              title={movie.title}
              genre={movie.genre}
              releaseDate={movie.releaseDate}
              imdbRating={movie.imdbRating}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ListMovie;
