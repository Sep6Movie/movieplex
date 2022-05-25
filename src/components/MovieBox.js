import React, {useEffect, useState} from 'react'
import { Modal} from 'react-bootstrap';
import './Dashboard.css'

const base_url="https://image.tmdb.org/t/p/w500";
const API_URL="https://api.themoviedb.org/3/movie/"
const API_KEY="credits?api_key=e07a0c394bdeedde413d9b1e4ee9357e"


const MovieBox = ({titel, credits, poster_path, vote_average, vote_count, release_date, overview})=> {
  const [show, setShow]=useState(false);
  const [actors, findActor] = useState([]);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  async function findActors(){
    try{
      const url=`https://api.themoviedb.org/3/movie/4555/credits?api_key=e07a0c394bdeedde413d9b1e4ee9357e`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      findActor(data.results);
      setShow(true);
    }
    catch(e){
      console.log("findActor " + e);
    }
  }
  return (

    <div className="card text-center bg-secondary mb-3" >
    <div className="card-body">
     <img className="card-img-top" src={`${base_url}${poster_path}`} alt="poster not found" />
     <button type="button" className="btn btn-dark" onClick={findActors} >View More</button>
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
          
          <h5>Director: {null}</h5>
          <h5>Actors</h5>

          
          </Modal.Body>
          </Modal>  
     </div>
    </div>
  )
}
export default MovieBox