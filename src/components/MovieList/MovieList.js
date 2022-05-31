import React from 'react'
import db from "../../firebase"
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext"
import MovieContent from '../MovieContent';
const API_KEY="e07a0c394bdeedde413d9b1e4ee9357e"

function MovieList({media_type, id}) {
    const [favorites, setFavorites] = useState([]);
    const [movieID, setMovieId] = useState("");
    const { currentUser } = useAuth()

    useEffect(() => {
        onSnapshot(collection(db, "movielist"), (snapshot) => 
        setFavorites(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        ) 
    fetchMoviesForUser() }, [], 
        console.log(movieID),
    );

    const fetchMoviesForUser = async () => {
        try{
            console.log(favorites)
            if(currentUser.userUID == favorites.userUID)
            {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`
        );

        setFavorites(data);
        console.log(data)
    }
    } catch (error) {
        console.error(error);
      }
      };

  return (
      <>
      <div>
        <div className="dashboard"> 
          {favorites.map((favorite) => (
              <MovieContent 
              key={favorite.id}
              id={favorite.movieID}
              poster={favorite.poster_path}
              title={favorite.title || favorite.name}
              date={favorite.first_air_date || favorite.release_date}
              media_type={"movie" || "tv"}
              vote_average={favorite.vote_average}
              />
            ))}
            </div>
            </div>
    </>
  )
}

export default MovieList


