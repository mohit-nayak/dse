import React from 'react';
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.svg';
import * as classes from './NavBar.module.scss';

const NavBar = ({ absolute = false }) => {
    return (
        <Navbar className={`${absolute ? classes.Absolute : ''} ${classes.Nav}`} expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Link to="/blog" className={`nav-link px-4 ${classes.NavLink}`}>Testimonials</Link>
                        <Link to="/blog" className={`nav-link px-4 ${classes.NavLink}`}>Services</Link>
                        <Link to="/blog" className={`nav-link px-4 btn btn-primary ms-3 ${classes.NavLink} ${classes.NavBtn}`}>
                            Blog
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;