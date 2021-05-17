import React from 'react'

const image_api = 'https://www.themoviedb.org/t/p/w1280';

const Movie = ({title,poster_path,overview,vote_average}) => {

    const setVoteClass = (vote) => {
        if(vote>8){
            return 'green'
        }
        else if(vote>=6){
            return 'orange'
        }
        else {
            return 'red'
        }
    }
    return (
        <div className ="movie">
            <div className="movie-header">
                <img src={image_api + poster_path} alt={title} />
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
                </div>
                <div className="movie-over">
                    <h2>Overview</h2>
                    <p>{overview}</p>
                </div>
            </div>
           
        </div>
    )
}

export default Movie
