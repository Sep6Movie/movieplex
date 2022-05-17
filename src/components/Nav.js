import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
  
  const[show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav_barscroll"}`}>
        <img className='nav_logo'
        src="https://www.pngitem.com/pimgs/m/80-801174_production-clipart-icon-png-transparent-transparent-background-movie.png"
        alt="logo"/>

        <img className='nav_user'
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="logo"/>
    </div>
  )
}

export default Nav