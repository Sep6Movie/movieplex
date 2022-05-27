import React, {useEffect, useState } from 'react'
import {Navbar,Container,Nav as Nav1,Form, FormControl,Button } from 'react-bootstrap';
import "./Nav.css"
// import { makeStyles } from '@mui/styles';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import MovieIcon from '@mui/icons-material/Movie';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate } from "react-router-dom"

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=e07a0c394bdeedde413d9b1e4ee9357e";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e07a0c394bdeedde413d9b1e4ee9357e&query";

const style = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
};

function Nav() {  
  const [movies, setMovies]=useState([]);
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()


  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/profile");
    } else if (value === 4) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <>
    <Navbar sx={style} bg="rgb(46, 51, 66)" expand="lg" variant='dark' >
    <Container fluid>
    <Box   sx={{ width: 1000, bgcolor: 'dark',
          boxShadow: 1,
          borderRadius: 2, }}>
      <BottomNavigation className="NavBox"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction  label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction  label="Series" icon={<SlideshowIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />

      </BottomNavigation>
    </Box>
</Container>
    </Navbar>
      </>
  );
}

export default Nav