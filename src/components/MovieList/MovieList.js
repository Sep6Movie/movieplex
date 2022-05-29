import React from 'react'
import db from "../../firebase"
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'
import axios from "axios";
import MovieContent from '../MovieContent';

const API_KEY="e07a0c394bdeedde413d9b1e4ee9357e"

function MovieList() {
    const [favorites, setFavorites] = useState([{name : "Loading ...", id: "loading"}]);
    const [movieID, setMovieId] = useState("");
    const [content, setContent] = useState([]);

    console.log(favorites);
    useEffect(
        () => 
        onSnapshot(collection(db, "movielist"), (snapshot) => 
        setFavorites(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        ),
        []
    );

    const fetchMovies = async () => {
        try{
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${movieID}/361743?api_key=${API_KEY}&language=en-US`
        );
        setContent(data.results);
        console.log(data)
    } catch (error) {
        console.error(error);
      }
      };
    
  return (
      <>
    <div className="dashboard">
        {favorites.map((favorite) => (
            <div key={favorite.id}>
            movieID={favorite.movieID}
            <br></br>
            userUID={favorite.userUID}
            <br></br>
            movielistID={favorite.id}
            </div>
              ))}
    </div>
    
    </>
  )
}

export default MovieList


{/* <MovieContent
            key={favorite.id}
            id={favorite.movieID}
            title={favorite.movieID}
              /> */}