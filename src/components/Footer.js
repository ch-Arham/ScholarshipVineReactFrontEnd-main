import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import backImg from '../assets/images/covers/pattern.png';
import SVlogoLight from '../assets/images/SV/logo-light.png';

const Footer = () => {
    return (
        <footer className="pt-5 pb-3 position-relative" style={{ background: `url(${backImg}) center top` }}>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Container>
                <Row className="justify-content-between">
                    <Col md={6}>
                        <div className="auth-logo me-lg-5">
                            <Link to="/" className="logo logo-dark">
                                <span className="logo-lg">
                                    <img src={SVlogoLight} alt="" className="me-2" height="70" />
                                </span>
                            </Link>

                            
                        </div>

                        <p className="fs-24 mt-4">
                            <span className="mx-1"><i className="bi-facebook"></i></span>
                            <span className="mx-1"><i className="bi-twitter"></i></span>
                            <span className="mx-1"><i className="bi-linkedin"></i></span>
                            <span className="mx-1"><i className="bi-instagram"></i></span>
                            <span className="mx-1"><i className="bi-youtube"></i></span>
                        </p>
                    </Col>

                    <Col className="col-md-2 col-sm-4 col-6 mb-3">
                        <h5 className="">Scholarships</h5>

                        <ul className="list-unstyled ps-0 mb-0 mt-3">
                            <li className="mt-2">
                                <Link                                
                                    to="/"                                
                                    className="text-dark">
                                    Find Candidates
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/" className="text-dark">
                                    Book a Call
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/" className="text-dark">
                                    How to Find
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col className="col-md-2 col-sm-4 col-6 mb-3" >
                        <h5 className="">Company</h5>

                        <ul className="list-unstyled ps-0 mb-0 mt-3">
                            <li className="mt-2">
                                <Link to="/"className="text-dark">
                                    Blog
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/" className="text-dark">
                                    About Us
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/" className="text-dark">
                                    Reviews
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col className="col-md-2 col-sm-4 col-12 mb-3">
                        <h5 className="">Contact</h5>

                        <ul className="list-unstyled ps-0 mb-0 mt-3">
                            <li className="mt-2">
                                <Link                                
                                    to="/"                                
                                    className="text-dark">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link to="/" className="text-dark">
                                    Help Center
                                </Link>
                            </li>                            
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <div className="mt-5">
                            <p className="mt-4 text-center mb-0">© {new Date().getFullYear()} ScholarshipVine. All reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
