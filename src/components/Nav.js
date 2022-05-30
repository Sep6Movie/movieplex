import React, { useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from '@mui/icons-material/Person';
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate } from "react-router-dom"
import SlideshowIcon from '@mui/icons-material/Slideshow';


export default function SimpleBottomNavigation() {
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
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      
    >
      <BottomNavigationAction style={{ color: "black" }} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction style={{ color: "black" }} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction  style={{ color: "black" }} label="Tv Series" icon={<SlideshowIcon />} />
        <BottomNavigationAction style={{ color: "black" }} label="Profile" icon={<PersonIcon />} />
        <BottomNavigationAction style={{ color: "black" }} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}