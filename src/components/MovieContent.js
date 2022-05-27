import React from 'react'
import { img_300, unavailable } from "../config";
import "./MovieContent.css";


const MovieContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    vote_count,
  }) => {
    return (
        <div className='media'>
          <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="dateTitle">{date}</span>
        <div className='votebox'>{vote_average} </div>
        <p className='votecount'>{vote_count}</p>
        </span>
        </div>
    );
  };

export default MovieContent