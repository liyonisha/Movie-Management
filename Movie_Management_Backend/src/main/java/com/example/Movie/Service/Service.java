package com.example.Movie.Service;

import com.example.Movie.Entity.Movie;
import com.example.Movie.Repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.NoSuchElementException;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    private Repository repository;

    public Movie saveMovie(Movie movie){ return repository.save(movie);}

    public List<Movie> saveMovies(List<Movie> movies) {
        return repository.saveAll(movies);
    }

    public List<Movie> getMovies() {
        return repository.findAll();
    }

    public Movie getMovieById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Movie getMovieByTitle(String title) {
        return repository.findByTitle(title);
    }

    public String deleteMovie(int id) {
        repository.deleteById(id);
        return "Movie removed !! " + id;
    }

    public Movie updateMovie(int id, Movie updatedMovie) {
        Movie existingMovie = repository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Movie not found with ID: " + id));
        existingMovie.setTitle(updatedMovie.getTitle());
        existingMovie.setGenre(updatedMovie.getGenre());
        existingMovie.setReleaseDate(updatedMovie.getReleaseDate());
        existingMovie.setImdbRating(updatedMovie.getImdbRating());
        return repository.save(existingMovie);
    }
}
