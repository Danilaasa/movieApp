import React, { useEffect, useState } from "react";
import { Title } from "../Title/Title";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { MoviesCards } from "../../store/types";
import { Carousel } from "antd";
import { beautifyDuration, beautifyDeclination } from "../../utils";
import "./MoviePage.css"
import { Tag } from "../Tag/Tag";
import { FavoritiesButton } from "../FavoritiesButton/FavoritiesButton";
import { Button } from "../Button/Buttton";


const contentStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "100%",
    transition: "0.2s",
};

export const MoviePage = () => {
    const {id} = useParams()
    const movies = useSelector((state: RootState) => state.movies)
    const [movie, setMovie] = useState<MoviesCards>({
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    Response: '',
    Images: []
    })


    useEffect(() => {
            const movieById = movies.allMovies.find((movie) => movie.imdbID === id)
            setMovie(movieById as MoviesCards)
    }, [id])
    return (
        <section className="movie-page container" >
            <Title className="movie-page__title" >{movie?.Title}</Title>
            <div className="movie-page__preview" >
                    <Carousel  autoplay={true} className="movie-page__preview-image" arrows infinite={false}>
                        
                        {movie?.Images.map((image) => {
                            return (
                                <div key={movie.imdbID} className="movie-page__preview-image" >
                                    <img src={image} style={contentStyle} alt="" />
                                </div>
                            )
                        })}
                    </Carousel>
                    <div className="movie-page__preview-info" >
                            <p className="movie-page__preview-info-titles movie-page__preview-info__writer">Сценарист: <span className="movie-page__spans movie-page__preview-info__screenwriter" >{movie?.Director === "N/A" ? movie.Writer : movie?.Director}</span></p>
                            <p className="movie-page__preview-info-titles movie-page__preview-info__time">Продолжительность: <span className="movie-page__spans movie-page__preview-info__duration" >{movie?.Runtime !== "N/A" ? `${movie?.Runtime.slice(0, 3)} ${beautifyDuration(Number(movie?.Runtime.slice(0, 3)), ["минута", "минуты", "минут"])}` : `105 ${beautifyDuration(105, ["минута", "минуты", "минут"])}`}</span></p>
                            <p className="movie-page__preview-info-titles movie-page__preview-info__year">Год публикации: <span className="movie-page__spans movie-page__preview-info__date" >{movie?.Year}</span></p>
                            <p className="movie-page__preview-info-titles movie-page__preview-info__countries">{beautifyDeclination(movie?.Country as string)} <span className="movie-page__spans movie-page__preview-info__country" >{movie?.Country}</span></p>
                            <p className="movie-page__preview-info-titles movie-page__preview-info__actors">Актеры: <span className="movie-page__spans movie-page__preview-info__artists" >{movie?.Actors}</span></p>
                             {!movies.ids.includes(id as MoviesCards['imdbID']) ? <FavoritiesButton id={id as MoviesCards['imdbID']} /> : <Button />}
                    </div>
            </div>
            <div className="movie-page__description" >
                <h3 className="movie-page__description-title" >Описание:</h3>
                <p className="movie-page__description-text" >{movie?.Plot}</p>
                {movie?.Awards !== "N/A" ? <div>
                    <h3 className="movie-page__description-title" >Награды:</h3>
                     <p className="movie-page__description-awards" >{movie?.Awards}</p>
                </div> : null}
                <h3 className="movie-page__description-title" >Теги:</h3>
                <div className="movie-page__description-tags" >
                    {movie.Genre.includes(",") && movie.Genre.split(", ").map((tag) => {
                        return <Tag key={tag} >{tag}</Tag>
                    })}
                </div>
                    
            </div>

        </section>
        
    )
}