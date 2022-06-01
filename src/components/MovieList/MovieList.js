import React, { useReducer } from 'react'
import db from "../../firebase"
import { useEffect, useState } from 'react'
import { collection, onSnapshot, getDocs } from '@firebase/firestore'
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext"
import MovieContent from '../MovieContent';
import { img_300 } from "../../config";
 
const API_KEY="e07a0c394bdeedde413d9b1e4ee9357e"

function MovieList() {
    const [movies, setMovies] = useState([]);
    const { currentUser } = useAuth()
    const [reducer, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        const fetchMovies = async() => {  
            const querySnapshot = await getDocs(collection(db, "movielist")).then(snapshot => {
                snapshot.docs.map(doc => ({...doc.data(), id: doc.id})).forEach(async doc => {
                    if(doc.userUID === currentUser.uid)
                        {
                            try{
                            const { data } = await axios.get(
                                `https://api.themoviedb.org/3/movie/${doc.movieID}?api_key=${API_KEY}&language=en-US`
                            );
                            let movie = {key : doc.movieID, 
                                id : doc.movieID, 
                                poster : `${img_300}${data.poster_path}`, 
                                title : data.title, 
                                date : data.date,  
                                vote_average : data.vote_average,
                                vote_count : data.vote_count
                            }
                            movies.push(movie)
                        }catch (error) { 
                            console.error(error);
                        }
                    }  
                    console.log(doc)
                }) 
            }); 
            forceUpdate();
 console.log(movies)
}  
if (movies.length === 0){
    fetchMovies();
}
},  [reducer, currentUser]) 
     
  return (
      <>
      <div >
        <div className="dashboard"> 
          {movies.map((favorite) => (
              <MovieContent 
              key={favorite.id}
              id={favorite.movieID}
              poster={favorite.poster_path}
              title={favorite.title || favorite.name}
              date={favorite.first_air_date || favorite.release_date}
              media_type={"movie" || "tv"}
              vote_average={favorite.vote_average}
              vote_count={favorite.vote_count}
              />
            ))}
            </div>
            </div>
    </>
  )
}

export default MovieList


