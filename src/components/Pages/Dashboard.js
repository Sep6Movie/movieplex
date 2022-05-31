import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios';
import MovieContent from '../MovieContent';
import PageManager from '../PageManager';

const API_KEY="e07a0c394bdeedde413d9b1e4ee9357e"

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);

  return (
    <>
    <div>
      <span className="pageTitle">Trending</span>
      <div className="dashboard">
        {content?.map((c) => (
            <MovieContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              vote_count={c.vote_count} />
          ))}
      </div>
      <PageManager setPage={setPage}></PageManager>
    </div>
  </>
  );
};


export default Dashboard;