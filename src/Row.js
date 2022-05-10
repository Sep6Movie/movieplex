import React, { useState, useEffect} from 'react'
import axios from './axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => { 
        async function fecthData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fecthData();
    }, []);

  return (
    <h2>{title}</h2>
  )
}

export default Row