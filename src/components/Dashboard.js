import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import MovieBox from './MovieBox';
import './Dashboard.css'

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=e07a0c394bdeedde413d9b1e4ee9357e"

function Dashboard() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      //console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <><Nav></Nav>
      <div>
        <div className='container'>
          <div className='grid'>
        {movies.map((movieReq)=> 
        <MovieBox key={movieReq.id} {...movieReq}/>)}
        </div>
    </div>
    </div>
    </>
  );
}

export default Dashboard;