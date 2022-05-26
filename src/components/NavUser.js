import React from 'react'
import {Navbar,Container,Nav as Nav1,Form, FormControl,Button } from 'react-bootstrap';

function NavUser() {
  return (
    <Navbar bg="dark" variant='dark' >
    <Container fluid>
  <Navbar.Brand href="/">MoviePlex</Navbar.Brand>
  <Navbar.Brand href="/profile">Profile</Navbar.Brand>
  <Navbar.Brand href="">Explore</Navbar.Brand>
  </Container>
  </Navbar>
  )
}

export default NavUser