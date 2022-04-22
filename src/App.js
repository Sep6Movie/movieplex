import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>Hey this is our app</h1>
      <Row title="ORIGINAL MOVIES" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="TRENDING MOVIES" fetchUrl={requests.fetchTrendingMovies} />
    </div>
  );
}

export default App;
