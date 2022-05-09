import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav()
{
    useEffect(() => 
    {
        const [show,handleShow] = useState(false);

        window.addEventListener("scoll",()=>
        {
            if (window.scrollY > 100) {
                handleShow(true);
            } else 
            handleShow(false);
        });
        return () => 
        {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
        className="nav_logo"
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647410910018/spTELtuIz.jpeg"
        alt="Netflix Logo"/>
        <img
        className="nav_avatar"
        src="https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419"
        alt="Netflix Avatar"/>
    </div>);
}

export default Nav