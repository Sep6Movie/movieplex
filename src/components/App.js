import React from 'react';
import "./App.css";
import Row from './Row';
import requests from './api/requests';
import Nav from './Nav';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="app">
      <Nav />
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}>
        <div className='w-100' style={{ maxWidth: '400px'}} >
      <SignUp />
        </div>
      </Container>
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
