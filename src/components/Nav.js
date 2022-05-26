import React, {useEffect, useState } from 'react'
import {Navbar,Container,Nav as Nav1,Form, FormControl,Button } from 'react-bootstrap';
import "./Nav.css"
import MovieBox from './MovieBox';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=e07a0c394bdeedde413d9b1e4ee9357e";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e07a0c394bdeedde413d9b1e4ee9357e&query";


function Nav() {  
  const [query, setQuery]=useState('');
  const [movies, setMovies]=useState([]);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=e07a0c394bdeedde413d9b1e4ee9357e&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.table(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <>
    <Navbar bg="rgb(46, 51, 66)" expand="lg" variant='dark' >
<Container fluid>
<Box   sx={{ width: 1000 }}>
      <BottomNavigation className="NavBox"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction  label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction  label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />

      </BottomNavigation>
    </Box>
<Form className="d-flex" onSubmit={searchMovie} autoComplete="on">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}
              ></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
</Container>
    </Navbar>
      <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>No Movies Found</h2>
      )}
    </div>   
    </>
    
  );
}

export default Nav