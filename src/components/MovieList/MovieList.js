import React from 'react'
import db from "../../firebase"
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'
import axios from "axios";
import MovieContent from '../MovieContent';
import { useAuth } from "../../contexts/AuthContext"
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const API_KEY="e07a0c394bdeedde413d9b1e4ee9357e"

function MovieList() {
    const [favorites, setFavorites] = useState([{name : "Loading ...", id: "loading"}]);
    const [movieID, setMovieId] = useState("");
    const [content, setContent] = useState([]);
    const { currentUser } = useAuth()

    useEffect(
        () => 
        onSnapshot(collection(db, "movielist"), (snapshot) => 
        setFavorites(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        ),
        [], 
    );

    const fetchMoviesForUser = async () => {
        try{
            console.log(favorites)
            if(currentUser.userUID == favorites.userUID)
            {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${favorites.movieID}?api_key=${API_KEY}&language=en-US`
        );
        setContent(data.results);
        console.log(data)
    }
    } catch (error) {
        console.error(error);
      }
      };
    // const handleNewMovieToMovieList = async () => {
    //     const movieID = content.id;
    //     const userUID = currentUser.uid;
    
    //     const collectionRef = collection(db, "movielist");
    //     const payload = {movieID, userUID }
    //     await addDoc(collectionRef, payload);
    //   }
    
  return (
      <>
   <label htmlFor="icon-button-file">
        <IconButton color="secondary" onClick={fetchMoviesForUser} aria-label="like" component="span">
          <FavoriteIcon/>
        </IconButton>
        <p>Like me!</p>
      </label>
    <div className="dashboard">
        {favorites.map((favorite) => ( 
           
            <div key={favorite.id}>
            movieID={favorite.movieID}
            <br></br>
            userUID={favorite.userUID }
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