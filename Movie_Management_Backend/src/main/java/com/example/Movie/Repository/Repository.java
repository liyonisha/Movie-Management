package com.example.Movie.Repository;

import com.example.Movie.Entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Movie,Integer> {
    Movie findByTitle(String title);
}
