import React, { useState, useEffect } from "react"
import {Card, Button, Alert, Image} from 'react-bootstrap'
import { upload, useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import NavUser from "../NavUser"
import MovieList from "../MovieList/MovieList"

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
        console.log(currentUser)
        if (currentUser?.photoURL) {
          setPhotoURL(currentUser.photoURL);
        }
      }, [currentUser])
    

  return (
    <>
    <NavUser/>
        <h2 className="text-center mb-4">Profile</h2>
        <div>
        <strong>Email:</strong> {currentUser.email}
        </div>
        {/* <Card>
      <Card.Body classname="card text-black bg-primary mb-3">
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        {/* <div className="fields">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
     <img src={photoURL} alt="Avatar" className="img-fluid rounded-circle img-thumbnail rounded float-right" />
     </div> */}
    {/* </Card.Body>
    </Card> */} 
    <div> 
      <h3>Favorite movies HERE </h3>
      <MovieList></MovieList>
    </div>
        {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link> */}
    <div className="w-100 text-center mt-2">
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  </>
)
}
