import React, {useEffect, useState} from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    // Hver gang dette køres, kommer der information, når koden kører
    useEffect(() => { 
        // if [] = null, run once when the row loads, and dont run again
        async function fecthData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    }, [fetchUrl]);

  // console.table(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/* posters  */}
                
                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}
                 </div>   
        </div>
    )
}

export default Row
