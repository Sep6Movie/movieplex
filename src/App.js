import React from 'react';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>MoviePlex</h1>
      <Row title="TRENDING MOVIES" fetchUrl={requests.fetchTrending} />
   <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchTopRatedMovies}/>
    </div>
  );
}

export default App;
