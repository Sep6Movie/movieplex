import React from 'react';
import "./App.css";
import Row from './Row';
import requests from './api/requests';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Row title="TRENDING MOVIES" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries}/>
   
    </div>
  );
}
 
export default App;
