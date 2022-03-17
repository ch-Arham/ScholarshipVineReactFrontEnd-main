import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import SVlogoLight from '../assets/images/SV/logo-light.png';

const NavBar = () => {    
    // on scroll add navbar class
    useEffect(() => {
        // manage scroll
        const navbar = document.getElementById('nav-menu');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (navbar) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    navbar.classList.add('nav-sticky', 'shadow');
                } else {
                    navbar.classList.remove('nav-sticky', 'shadow');
                }
            }
        });
    }, []);

    const [activeToggle, setActiveToggle] = useState(true);

    return (
        <div>
            <Navbar collapseOnSelect expand={'lg'} className="py-lg-2 mb-2 sticky-top" id="nav-menu">
                <Container>
                    <div className="auth-logo me-lg-5">
                        <Link to="/" className="logo logo-dark">
                            <span className="logo-lg">
                                <img src={SVlogoLight} alt="" className="me-2" height="50" />
                            </span>
                        </Link>
                        
                    </div>

                    <Navbar.Toggle
                        className="shadow-none border-0 px-0 text-dark"
                        aria-controls="responsive-navbar-nav">                   
                        
                        <i onClick={() => setActiveToggle(!activeToggle)} className= {activeToggle ? "uil uil-bars": "uil uil-times"}></i>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* left menu */}
                        <Nav as="ul" className="me-auto align-items-center"></Nav>

                        {/* right menu */}
                        <Nav as="ul" className="ms-auto align-items-lg-center fs-16 fw-bold">
                            <Nav.Item as="li" className="mx-lg-1">
                                <Nav.Link as={Link} to="/login" className="text-dark link-demos">
                                    Apply for a Scholarship
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="mx-lg-1">
                                <Nav.Link as={Link} to="/login" className="text-dark link-demos">
                                    <Button className="btn-lg link-demos">
                                        Find the right Candidates                                        
                                    </Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="mx-lg-1">                                
                                <Nav.Link as={Link} to="/login" className="text-dark link-demos">
                                    Login
                                </Nav.Link>                               
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
