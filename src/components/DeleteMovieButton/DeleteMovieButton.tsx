import React, { FC } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { deleteFavoriteMovie, addDeletedMovie, deleteId } from "../../store/MoviesSlice";
import { MoviesCards } from "../../store/types";
import "./DeleteMovieButton.css"

interface IDeleteMovieBuon {
    id: string
}

export const DeleteMovieButton: FC<IDeleteMovieBuon> = ({ id }) => {
    const state = useSelector((state: RootState) => state.favorities)
    const dispatch = useDispatch()
    
    const onClickDelete = () => {
        const newFavoriteState = state.favorities.filter((favoriteMovie) => favoriteMovie.imdbID !== id)
        const deletedMovie = state.favorities.find((movie) => movie.imdbID === id)
        dispatch(addDeletedMovie(deletedMovie as MoviesCards))
        dispatch(deleteFavoriteMovie(newFavoriteState))  
        
        dispatch(deleteId(deletedMovie?.imdbID as MoviesCards['imdbID']))
    }

    return (
        <Button onClick={onClickDelete} className="delete-button" type="primary" danger>Удалить из избранных</Button>
    )
}