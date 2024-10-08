import React, { FC } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { startModal } from "../../store/MoviesSlice";
import { useResize } from "../../useResize"; 
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";

interface IHeader {
    children: React.ReactNode
}



export const Header: FC<IHeader>= ({ children }) => {
    const state = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const {  isAdaptive } = useResize()


    
    const onIconClick = () => {
        dispatch(startModal(true))        
    }


    return (
        <header>
            <div className="header container">
                <div className="header__logo">
                    <Link to="/" className="header__logo-link" >
                    <svg width="60px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth="1" >
                        <g className="header__logo-link-svg" >
                        <path d="M19.7286477,3.87458256 L19.7796475,4.03423199 L20.3309222,5.95675538 C20.4355805,6.32174238 20.2508505,6.70115383 19.9126449,6.84979651 L19.8167039,6.88442967 L9.08979429,9.9595254 L20.2488588,9.96046231 C20.6285546,9.96046231 20.9423498,10.2426162 20.9920122,10.6086918 L20.9988588,10.7104623 L20.9988588,19.2084746 C20.9988588,20.6710064 19.8571542,21.8668789 18.4163811,21.9534558 L18.2488588,21.9584746 L5.75,21.9584746 C4.28746816,21.9584746 3.09159572,20.81677 3.00501879,19.3759969 L3,19.2084746 L2.99979429,10.8165254 L2.47803395,8.99538983 C2.07490554,7.589514 2.84275532,6.12527119 4.20385145,5.64491723 L4.36350088,5.59391744 L16.3781751,2.14876505 C17.7840509,1.74563665 19.2482937,2.51348642 19.7286477,3.87458256 Z M6.27268011,6.60691826 L4.77695691,7.03580999 C4.15481999,7.21420488 3.7786565,7.83376496 3.89085867,8.45731315 L3.91988247,8.58194642 L4.26421826,9.78278802 L4.55930489,9.69792899 L6.27268011,6.60691826 Z M11.029003,5.24306462 L8.31151617,6.02229143 L6.59814094,9.11330216 L9.31562776,8.33407535 L11.029003,5.24306462 Z M15.7862871,3.87893535 L13.0688003,4.65816215 L11.3554251,7.74917288 L14.0719506,6.97022172 L15.7862871,3.87893535 Z M17.6334765,3.64537692 L16.1127092,6.38504361 L18.6812212,5.64877896 L18.3377549,4.44768802 C18.2305941,4.07397383 17.96425,3.78902913 17.6334765,3.64537692 Z" >
                        </path>
                        </g>
                        </g>
                    </svg>
                    </Link>
                </div>
                
                {!isAdaptive ? <div className="header__info" >
                    <button className="modal-active-button" >
                        <QuestionCircleOutlined onClick={onIconClick} className="modal-active-button-icon" style={{fontSize: "20px"}} />
                    </button>
                    <div className="header__info-favorites" >
                        <Link className="header__info-favorities-link" to="/favorities" >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="stroke" d="M5 5.00001C5 4.07954 5.74619 3.33334 6.66667 3.33334H13.3333C14.2538 3.33334 15 4.07954 15 5.00001V17.5L10 12.5L5 17.5V5.00001Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="header__info-favorities-title">Избранное</span>
                        </Link>
                        
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle className="circle" cx="12" cy="12" r="11.5">
                            </circle>
                            <text className="textInCircle" dy=".3em" x="50%" y="50%"  alignmentBaseline="alphabetic" textAnchor="middle" fontSize="12px" >{state.favorities.favorities.length}</text>
                        </g>
                        </svg>

                    </div>
                    <ThemeSwitcher />

                    
                </div> : <MobileNavigation />}
            </div>
            {children}
        </header>
    )
}