import axios from "axios";
import { useState, useEffect } from "react";
import PageManager from "../PageManager";
import MovieContent from "../MovieContent";
import Nav from "../Nav";
const API_KEY="e07a0c394bdeedde413d9b1e4ee9357e"


const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
 // const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
const {data} = await axios.get(
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);

  setContent(data.results);
  setNumOfPages(data.total_pages);
  }

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);


  return (
    <div>
      <span className="pageTitle">Movies</span>
      <div className="dashboard">
        {content?.map((c) => (
            <MovieContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average} />
          ))}
      </div>
      <PageManager setPage={setPage}></PageManager>
    </div>
    
  );
};

export default Movies