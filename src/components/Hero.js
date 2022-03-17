import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import backImg from '../assets/images/covers/pattern.png';
import verticalImg from '../assets/images/SV/hero2.jpg';

const Hero = () => {
    return (
        <section
            className="hero-section position-relative overflow-hidden px-3 text-dark pt-4 pb-4 mb-5"
            style={{ background: `url(${backImg}) center top` }}>
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
                <Row className="align-items-center justify-content-between">
                    <Col className="col-xl-6 col-md-6 col-lg-6 col-12">
                        <div className="py-4">
                            <h1 className="mb-3 fs-">GET a Scholarship or Grant</h1>
                            <p className="fs-20 mb-3">Our AI-backed Intelligent Scholarship Cloud helps you gain access to the world's best scholarships and grants</p>

                            <p className="mb-1 hero__btn">
                                <Link to="/login">
                                    <Button className="btn-lg me-2 link-demos my-1">
                                        Apply for a Scholarship/Grant
                                    </Button>
                                </Link>
                                
                            </p>

                            <p className="mb-3 fs-14">
                                Find the right <Link to="/login" className="font-weight-bold">Candidates for your Scholarship/Grant</Link> 
                            </p>

                            <p className="mb-3 fs-16">
                                Join hundreds of students and researchers that trust the Scholarship Vine to get the best scholarships and grants
                            </p>
                            
                        </div>
                    </Col> 
                    <Col className="col-xl-6 col-md-6 col-lg-6 col-12">
                        <img style={{opacity: "0.8", borderRadius: "6px"}} src={verticalImg} alt="" className="hero__photo mx-auto d-block shadow img-fluid " />
                    </Col>                   
                </Row>                
            </Container>
        </section>
    );
};

export default Hero;
