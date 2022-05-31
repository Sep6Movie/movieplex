import React from 'react'
import { img_300, unavailable } from "../config";
import ContentModal from './Content/ContentModal';
import "./MovieContent.css"

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
        <ContentModal media_type={media_type} id={id}>
          <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
        <span className="dateTitle">{date}</span>
        <div className='votebox'>{vote_average}</div>
        <div className='votes'>{vote_count} ratings</div>
        </span>
        </ContentModal>
    );
  };

export default MovieContent 