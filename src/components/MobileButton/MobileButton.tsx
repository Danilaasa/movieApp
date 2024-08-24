import React from "react";
import "./MobileButton.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { showMenu } from "../../store/MoviesSlice";


export const MobileButton = () => {
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.navigationVisible)
    return (
        <svg onClick={() => dispatch(showMenu(!state.navigationVisible)) } width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="mobile-button-svg" d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}