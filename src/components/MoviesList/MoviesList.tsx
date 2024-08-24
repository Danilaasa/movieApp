import React, { useEffect } from "react";
import { MovieItem } from "../MovieItem/MovieItem";
import "./MoviesList.css"
import { Title } from "../Title/Title";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { moviesFetch, addAllMovies } from "../../store/MoviesSlice";
import { useLocation } from "react-router-dom";

export const MoviesList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const movies = useSelector((state: RootState) => state.movies)
    const { pathname } = useLocation()

    useEffect(() => {
        if (!movies.movies.length) {
            dispatch(moviesFetch())
        }  
            dispatch(addAllMovies())

    }, [])
    


    return (
        <div className="movies-list__container" >
        <Title>{(pathname !== "/favorities" && movies.value.length && !movies.searchMovies.length) ? `По запросу "${movies.value}" ничего не найдено` : (pathname !== "/favorities" && movies.value.length && movies.searchMovies.length) ? "Фильмы по запросу" : (pathname === "/favorities" && movies.favorities.length) ? "Избранные" : (pathname === "/favorities" && !movies.favorities.length) ? "Тут пока ничего нет..." : "Топ фильмов и сериалов"}</Title>
        <section className="container grid movies-list" >
        { (pathname !== "/favorities" && !movies.searchMovies.length && !movies.value.length) ? movies.movies.map((movie) => {
                return (
                        <MovieItem country={movie.Country} title={movie.Title} image={movie.Images[1]} rating={movie.imdbRating} year={movie.Year} id={movie.imdbID} key={movie.imdbID} />
          )
          })
         : (pathname === "/favorities" && movies.searchMovies.length === 0) ? movies.favorities.map((movie) => <MovieItem country={movie.Country} title={movie.Title} image={movie.Images[1]} rating={movie.imdbRating} year={movie.Year} id={movie.imdbID} key={movie.imdbID} />) : movies.searchMovies.map((movie) => <MovieItem country={movie.Country} title={movie.Title} image={movie.Images[1]} rating={movie.imdbRating} year={movie.Year} id={movie.imdbID} key={movie.imdbID} />)}
        </section>
        </div>
   
    )
}
