import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      
      <Nav></Nav>
      <Banner/>
      <Row
      title="TOP RATED MOVIES"
      fetchUrl={requests.fetchTopRatedMovies}
      IsLargeRow
      />
      <Row title="TRENDING MOVIES" fetchUrl={requests.fetchTrendingMovies} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
