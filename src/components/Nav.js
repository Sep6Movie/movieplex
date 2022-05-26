import React, {useEffect, useState } from 'react'
import {Navbar,Container,Nav as Nav1,Form, FormControl,Button } from 'react-bootstrap';
import "./Nav.css"
import MovieBox from './MovieBox';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=e07a0c394bdeedde413d9b1e4ee9357e";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e07a0c394bdeedde413d9b1e4ee9357e&query";

function Nav() {  
  const [query, setQuery]=useState('');
  const [movies, setMovies]=useState([]);

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
    <Navbar bg="dark" expand="lg" variant='dark' >
<Container fluid>
  <Navbar.Brand href="/">MoviePlex</Navbar.Brand>
  <Navbar.Brand href="/profile">Profile</Navbar.Brand>
  <Navbar.Brand href="">Explore</Navbar.Brand>
  <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
    <Navbar.Collapse id ="navbarScroll">
    <Nav1 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav1>

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
    </Navbar.Collapse>
</Container>
    </Navbar>
    {/* <img className='nav_user'
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="logo"/> */}
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