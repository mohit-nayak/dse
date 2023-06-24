import React from 'react';
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/logo.svg';
import logoDark from '../../../assets/images/logo-dark.svg';
import hamburgerWhiteIcon from '../../../assets/icons/hamburger-white.svg';
import * as classes from './NavBar.module.scss';

const NavBar = ({ absolute, light }) => {
    return (
        <Navbar className={`${absolute ? classes.Absolute : ''} ${light ? classes.Light : ''} ${classes.Nav}`}
                expand="lg">
            <Container className={`${classes.Container}`}>
                <Navbar.Brand href="/#home-banner" className={`${classes.LogoWrapper}`}>
                    { light ? <img src={logoDark} alt="Logo" /> : <img src={logo} alt="Logo" />}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${classes.Toggler}`}>
                    <img src={hamburgerWhiteIcon} alt={`hamburger`} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`${classes.LinksWrapper} ms-lg-auto d-flex align-items-lg-center`}>
                        <Link to="/#testimonials" className={`nav-link px-4 ${classes.NavLink}`}>Testimonials</Link>
                        <Link to="/#services" className={`nav-link px-4 ${classes.NavLink}`}>Services</Link>
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
