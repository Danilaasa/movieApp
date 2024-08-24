import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { MoviesCards } from "./types";

interface InitialState {
    movies: MoviesCards[],
    favorities: MoviesCards[],
    allMovies: MoviesCards[],
    ids: MoviesCards['imdbID'][],
    searchMovies: MoviesCards[],
    value: string,
    modalWindow: boolean,
    navigationVisible: boolean,
    themeValue: boolean
}

const initialState: InitialState = {
    movies: [],
    favorities: [],
    allMovies: [],
    ids: [],
    value: "",
    searchMovies: [],
    modalWindow: false,
    navigationVisible: false,
    themeValue: localStorage.getItem("theme") === "dark" ? true : false
}

export const moviesFetch = createAsyncThunk(
    "movies/moviesFetch",
    async () => {
        const response = await fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON")
        const data = await response.json()

        return data
    }
)

export const addAllMovies = createAsyncThunk(
    "allMovies/moviesFetch",
    async () => {
        const response = await fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON")
        const data = await response.json()

        return data
    }
)

export const MoviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<MoviesCards>) => {
                state.favorities.push(action.payload)
        },
        addNewMovies: (state, action: PayloadAction<MoviesCards[]>) => {
            state.movies = action.payload
        },
        addId: (state, action: PayloadAction<MoviesCards['imdbID']>) => {
            state.ids.push(action.payload)
        },
        addMoviesForSearch: (state, action: PayloadAction<MoviesCards[]>) => {
            state.searchMovies = action.payload
        },
        addValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        deleteFavoriteMovie: (state, action: PayloadAction<MoviesCards[]>) => {
            state.favorities = action.payload
        },
        deleteId: (state, action: PayloadAction<MoviesCards['imdbID']>) => {
            state.ids = state.ids.filter((id) => id !== action.payload)
        },
        addDeletedMovie: (state, action: PayloadAction<MoviesCards>) => {
            state.movies.push(action.payload)
        },
        startModal: (state, action: PayloadAction<boolean>) => {
            state.modalWindow = action.payload
        },
        showMenu: (state, action: PayloadAction<boolean>) => {
            state.navigationVisible = action.payload
        },
        changeTheme: (state, action) => {
            state.themeValue = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(moviesFetch.fulfilled, (state, action) => {
            state.movies = action.payload
        })
        .addCase(addAllMovies.fulfilled, (state, action) => {
            state.allMovies = action.payload
        })
            
    }
})

export default MoviesSlice.reducer
export const { addFavorite, changeTheme, deleteId, addNewMovies, startModal, addId, addMoviesForSearch, addValue, deleteFavoriteMovie, addDeletedMovie, showMenu } = MoviesSlice.actions