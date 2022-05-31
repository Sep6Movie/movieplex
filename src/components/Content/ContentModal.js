import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import axios from "axios";
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./ContentModal.css";
import { img_500, unavailableLandscape, unavailable} from "../../config";
import Carousel from "../ActorCarousel"
import CarouselDir from "../DirectorCarousel"
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import db from "../../firebase"
import { collection , addDoc} from '@firebase/firestore'
import { useAuth } from "../../contexts/AuthContext"

const API_KEY="e07a0c394bdeedde413d9b1e4ee9357e"

const style = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#ebebeb",
    border: "1px solid #bfbfbf",
    borderRadius: 10,
    color: "black",
    boxShadow: 25,
    p: 4,
  },
};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const { currentUser } = useAuth()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  const handleNewMovieToMovieList = async () => {
    const movieID = content.id;
    const userUID = currentUser.uid;
    const collectionRef = collection(db, "movielist");
    const payload = {movieID, userUID }
    await addDoc(collectionRef, payload);
  }

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
    <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal className="modal_"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
      <Box sx={style.paper}>
     { content && ( 
     <div className="ContentModal">
      <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
<img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />

<div className="like_movie">
        <IconButton color="error" onClick={handleNewMovieToMovieList} aria-label="like" component="span">
          <FavoriteIcon/>
        </IconButton>
        </div>
<div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  <br></br>

                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <span className="ContentModal__description">
                    {content.overview}
                  </span>
                <br></br>
                    <h6>Cast</h6>
<div>
  <Carousel media_type={media_type} id={id}></Carousel>
</div>
<h6>Crew</h6>
<div>
  <CarouselDir media_type={media_type} id={id}></CarouselDir>
</div>
                  <Button
                  className="btn_video"
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="error"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch Trailer
                  </Button>
                </div>
      </div>)}
      </Box>
    </Modal>
  </>
  );
}
