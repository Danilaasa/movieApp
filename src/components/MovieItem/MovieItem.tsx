import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./MovieItem.css"
import { FavoritiesButton } from "../FavoritiesButton/FavoritiesButton";
import { useLocation } from "react-router-dom";
import { beautifyDeclination } from "../../utils";
import { DeleteMovieButton } from "../DeleteMovieButton/DeleteMovieButton";


interface IMovieItem {
    id: string,
    year: string,
    image: string,
    description?: string,
    title: string,
    rating: string,
    country: string
}

export const MovieItem: FC<IMovieItem> = ({ rating, id, year, image, title, country }) => {
   const { pathname } = useLocation()

   return (
    
        <div className="movie-card" >
            <Link to={`/movie/${id}`} className="movie-card__image-container" >
                <div className='movie-card__image-link' >
                <img className="movie-card__image" src={image} alt="Изображение фильма" />
                </div>
                
            </Link>
            <div className="movie-card__info" >
                <span className="movie-card__info-date" >{year}</span>
                <span className="movie-card__info-title" >{title}</span>
                <span className="movie-card__info-rating" >{ rating !== "N/A" ? `Рейтинг: ${rating}` : `${beautifyDeclination(country)} ${country} `}
                { rating !== "N/A" ? <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none"/>
                    </g>
                    <g id="icons_Q2" data-name="icons Q2">
                    <path className="movie-card__info-rating__icon" d="M24,9.5l3.9,8,1,1.8,2,.3,8.8,1.3-6.3,6.2-1.5,1.4.3,2.1,1.5,8.7-7.8-4.1-1.9-1-1.9,1-7.8,4.1,1.5-8.7.3-2.1-1.5-1.4L8.3,20.9l8.8-1.3,2-.3,1-1.8,3.9-8M24,3a2.1,2.1,0,0,0-1.8,1.1L16.5,15.7,3.7,17.5A2.1,2.1,0,0,0,2.6,21l9.2,8.9L9.7,42.7A2,2,0,0,0,11.6,45l1-.2,11.4-6,11.4,6,1,.2a2,2,0,0,0,1.9-2.3L36.2,29.9,45.4,21a2.1,2.1,0,0,0-1.1-3.5L31.5,15.7,25.8,4.1A2.1,2.1,0,0,0,24,3Z"/>
                    </g>
                    </g>
                </svg> : null}
                </span>
                <div>
                {pathname !== "/favorities" ? <FavoritiesButton id={id}/> : <DeleteMovieButton id={id} /> }
                </div>
                
            </div>
        </div>
    
        
    )
}