import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import axios from "axios";
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./ContentModal.css";
import { img_300, img_500, unavailableLandscape, unavailable} from "../../config";
import { ClassNames } from "@emotion/react";
import Carousel from "../ActorCarousel"

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
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: 25,
    p: 4,
  },
};

export default function ContentModal({ children, media_type, id }) {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

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
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
  
    <div className="media" type="button"  
    onClick={handleOpen}>
      {children}
    </div>
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={ClassNames.modal}
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
                      ? `${img_300}/${content.poster_path}`
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
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>
                <br></br>
                    <h2>Cast</h2>
<div>
  <Carousel media_type={media_type} id={id}></Carousel>
</div>
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
                
      </div>)}
      
      </Box>

    </Modal>
  </>
  );
}


{/* <Typography id=
<Fade in={open}>
  <div sx={style.paper} >
  <h2 id="transition-modal-title">Transition modal</h2>
  <p id="transition-modal-description">react-transition-grpup animates me.</p>
  </div>
</Fade> */}