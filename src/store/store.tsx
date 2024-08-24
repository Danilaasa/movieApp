import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./MoviesSlice"
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';



const reducers = combineReducers({
    movies: MoviesReducer,
    favorities: MoviesReducer,
    allMovies: MoviesReducer,
    ids: MoviesReducer,
    searchMovies: MoviesReducer,
    value: MoviesReducer,
    modalWindow: MoviesReducer,
    navigationVisible: MoviesReducer,
    themeValue: MoviesReducer
 })

 const persistConfig = { 
    key: 'movies' , 
    storage, 
    whitelist: ["movies", "favorities", "allMovies", "ids", "searchMovies", "value", "modalWindow", "navigationVisible" ]
};

 const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // need to add unnecessary action in a list for avoiding
                // errors and warning
                ignoredActions: [
                         PERSIST,
                         FLUSH, 
                         REHYDRATE, 
                         PAUSE, 
                         PURGE,
                         REGISTER
                         ],
            },
        }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)