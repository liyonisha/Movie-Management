import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AddMovie.css';
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbCategoryFilled } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import axios from 'axios';

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    releaseDate: '',
    imdbRating: '',
  });

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/addMovie', formData);


      console.log('Server Response:', response.data);

     
      setFormData({
        title: '',
        genre: '',
        releaseDate: '',
        imdbRating: '',
      });

     
      navigate('/ListMovie'); 

    } catch (error) {
      console.error('Error sending data to the backend:', error);
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
    <div className='movie'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Add Movie</h1>

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
    </div>
  );
}

export default AddMovie;
