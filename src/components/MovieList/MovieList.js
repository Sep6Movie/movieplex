import React from 'react'
import db from "../../firebase"
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'
import axios from "axios";
import MovieContent from '../MovieContent';

const API_KEY="e07a0c394bdeedde413d9b1e4ee9357e"

function MovieList() {
    const [movieId, setMovieId] = useState("");
    const [content, setContent] = useState([]);

    useEffect(
        () => 
        onSnapshot(collection(db, "movielist"), (snapshot) => 
        setContent(snapshot.docs.map(doc => doc.data()))
        ),
        []
    );

    
    const fetchMovies = async () => {
        try{
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/361743?api_key=${API_KEY}&language=en-US`
        );
        setContent(data.results);
        console.log(data)
    } catch (error) {
        console.error(error);
      }
      };
    
  return (
    <div>
        {content && content.map((favorite) => (
 <MovieContent
 key={favorite.id}
 id={favorite.id}
 poster={favorite.poster_path}
 title={favorite.title || favorite.name}
 date={favorite.first_air_date || favorite.release_date}
 vote_average={favorite.vote_average}
/>
))}
       
    </div>
  )
}

export default MovieList