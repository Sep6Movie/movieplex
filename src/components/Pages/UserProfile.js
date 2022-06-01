import React, { useState, useEffect } from "react"
import {Button} from 'react-bootstrap'
import { upload, useAuth } from "../../contexts/AuthContext"
import {useNavigate } from "react-router-dom"
import MovieList from "../MovieList/MovieList"
import "./UserProfile.css"

export default function UserProfile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
    const navigate = useNavigate()

    async function handleLogout() {
        setError("")
        try {
          await logout()
          navigate("/login")
        } catch {
          setError("Failed to log out")
        }
      }

      function handleChange(e) {
        if (e.target.files[0]) {
          setPhoto(e.target.files[0])
        }
      }

      function handleClick() {
       upload(photo, currentUser, setLoading);
      }

      useEffect(() => {
        if (currentUser?.photoURL) {
          setPhotoURL(currentUser.photoURL);
        }
      }, [currentUser])
    
  return (
    <>
      <Button className="btn_logout" variant="dark" onClick={handleLogout}>
        Log Out
      </Button>
        <h2 className="text-center mb-4">Profile</h2>
        <div>
        <strong className="text">Email: {currentUser.email}</strong> 
        </div>
    <div> 
      <h3 className="text">Favorites </h3>
      <MovieList></MovieList>
    </div>
    <div className="w-100 text-center mt-2">
    </div>
  </>
)
}
