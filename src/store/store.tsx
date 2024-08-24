import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./MoviesSlice"


export const store = configureStore({
    reducer:{
        movies: MoviesReducer,
        favorities: MoviesReducer,
        allMovies: MoviesReducer,
        ids: MoviesReducer,
        searchMovies: MoviesReducer,
        value: MoviesReducer,
        modalWindow: MoviesReducer,
        navigationVisible: MoviesReducer,
        themeValue: MoviesReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch