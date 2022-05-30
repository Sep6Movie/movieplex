import React, {useEffect, useState} from 'react'
import { Modal} from 'react-bootstrap';
import './Pages/Dashboard.css'

const base_url="https://image.tmdb.org/t/p/w500";
const API_URL="https://api.themoviedb.org/3/movie/"
const API_KEY="credits?api_key=e07a0c394bdeedde413d9b1e4ee9357e"


const MovieBox = ({titel, name, poster_path, vote_average, vote_count, release_date, overview})=> {
  const [show, setShow]=useState(false);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);


  return (

    <div className="card text-center bg-secondary mb-3" >
    <div className="card-body">
     <img className="card-img-top" src={`${base_url}${poster_path}`} alt="poster not found" />
     <button type="button" className="btn btn-dark" >View More</button>
      <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <img className="card-img-top" style={{width:'14rem'}} src={`${base_url}${poster_path}`} alt={titel}  />
          <h4>Rating: {vote_average} votes: {vote_count}</h4>
          <h5>Release Date: {release_date}</h5>
          <br></br>
          <h6>Overview</h6>
          <p>{overview}</p>
          <div>
            <h5>Trailer</h5>
          </div>
          <button className=' btn btn-dark btn-sm'>Like</button>
          {/* <button className='btn-sm'><img src="https://cdn-icons-png.flaticon.com/512/73/73814.png" alt="my image" onClick={likeMovie} /></button> */}
          <h5>Director: {null}</h5>
          <h5>Actors {name}</h5>
          </Modal.Body>
          </Modal>  
     </div>
    </div>
  )
}
export default MovieBox