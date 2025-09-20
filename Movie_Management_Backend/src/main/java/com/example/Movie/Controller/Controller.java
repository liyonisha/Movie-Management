package com.example.Movie.Controller;


import com.example.Movie.Entity.Movie;
import com.example.Movie.Service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
public class Controller {

    @Autowired
    private Service service;

    @PostMapping("/addMovie")
    public Movie addMovie(@RequestBody Movie movie) {
        return service.saveMovie(movie);
    }

    @PostMapping("/addMovies")
    public List<Movie> addMovies(@RequestBody List<Movie> movies) {
        return service.saveMovies(movies);
    }

    @GetMapping("/movies")
    public List<Movie> findAllProducts() {
        return service.getMovies();
    }

    @GetMapping("/movieById/{id}")
    public Movie findMovieById(@PathVariable int id) {
        return service.getMovieById(id);
    }

    @GetMapping("/movie/{title}")
    public Movie findProductByTitle(@PathVariable String title) {
        return service.getMovieByTitle(title);
    }

    @CrossOrigin(origins = "*", methods = {RequestMethod.PUT})
    @PutMapping("/updateMovie/{id}")
    public Movie updateMovie(@PathVariable int id, @RequestBody Movie updatedMovie) {
        return service.updateMovie(id, updatedMovie);
    }


    @DeleteMapping("/delete/{id}")
    public String deleteMovie(@PathVariable int id) {
        return service.deleteMovie(id);
    }
}
