import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import "./SearchBar.css"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addMoviesForSearch, addValue } from "../../store/MoviesSlice";


interface ISearchBar {
    children: ReactNode
}



export const SearchBar:FC<ISearchBar> = ({ children }) => {
    const [value, setValue] = useState<string>("")
    const state = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target
        const value = input.value
        setValue(value)
    }

    useEffect(() => {
        dispatch(addValue(value))
        if (value.length !== 0) {
            
                const newStateSearch = state.movies.movies.filter((movie) => movie.Title.toLowerCase().includes(value.toLowerCase()))
                if (newStateSearch.length) {
                    dispatch(addMoviesForSearch(newStateSearch))
                } else {
                    dispatch(addMoviesForSearch([]))
                }

            
            
        }
        if (!value.length) {
            dispatch(addMoviesForSearch([]))
        }
            
            
       
    }, [value])

    

    
    return (
        <main>
            <div className="container search-bar" >
                <div className="search-bar__container" >
                    <svg className="search-bar__icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="search-bar__icon-path"  d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z" />
                    </svg>
                    <input onChange={onHandleChange} value={value as string} type="text" className="search-bar__input" placeholder="Найти фильм..." />
                </div>
                
                
        </div>
        {children}
        </main>
        
        
        
    )
}