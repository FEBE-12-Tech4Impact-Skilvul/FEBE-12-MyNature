import React from "react";
import {Container, Navbar, Button, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About/About";
import Kegiatan from "../../pages/Kegiatan/Kegiatan";
import DetailPage from "../../pages/DetailPage/DetailPage";
import Home from "../../pages/Home/Home";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { BiLogInCircle } from "react-icons/bi";
import "./Header.css"
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const Header = () => {
    return (
        <>
        <Navbar className="header sticky-top " expand="lg">
      <Container className="container-nav">
        <Navbar.Brand href="#home">
            <img className="navBrand" src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669133626/MyNature/Logo_m36xes.svg" alt="logoMyNature" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link className="navLink" href="#home">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/kegiatan">
            <Nav.Link className="navLink" href="#link">Article</Nav.Link>
        </LinkContainer> 
        <LinkContainer to="/about">
            <Nav.Link className="navLink" href="#link">About</Nav.Link>
        </LinkContainer> 
        <LinkContainer to="/login">
        <button className="buttonLogin">
                  Login <BiLogInCircle size={18} />
          </button>
        </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="kegiatan/detail/:id" element={<DetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
        </>
    );
};

export default Header;
