import React, { FC } from "react";
import "./FavoritiesButton.css"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { MoviesCards } from "../../store/types";
import { addFavorite, addNewMovies, addId } from "../../store/MoviesSlice";
import { useLocation } from "react-router-dom";
import { useRef } from "react";


interface IFavoritiesButton {
    id: string
}



export const FavoritiesButton:FC<IFavoritiesButton> = ({ id }) => {
    const dispatch = useDispatch<AppDispatch>()
    const state = useSelector((state: RootState) => state.movies)
    const targetRef = useRef<HTMLButtonElement>(null)
    const { pathname } = useLocation()
     const onHandleClick = () => {
            dispatch(addFavorite(state.movies.find((movie) => movie.imdbID === id) as MoviesCards))
            dispatch(addNewMovies(state.movies.filter((movie) => movie.imdbID !== id)))
            if (targetRef.current) {
                targetRef.current.disabled = true
                targetRef.current.classList.add("button-off")
            }
            dispatch(addId(id))
     }

    return (
        pathname === "/" ?
        <button  onClick={onHandleClick}  className="favoritites" >
            <svg className="favoritites__svg" width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="favoritites__rect" x="0.5" y="0.5" width="35" height="31" rx="5.5" />
                <path className="favoritites__icon" d="M13 11C13 10.0795 13.7462 9.33333 14.6667 9.33333H21.3333C22.2538 9.33333 23 10.0795 23 11V23.5L18 18.5L13 23.5V11Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button> : <button ref={targetRef} onClick={onHandleClick} className="movie-page__preview-info-button" >В избранное</button>
        
    )
}