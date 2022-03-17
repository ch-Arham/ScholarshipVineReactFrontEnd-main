import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// images
import cardImg1 from '../assets/images/SV/combine-card1.jpg';
import cardImg2 from '../assets/images/SV/combine-card2.jpg';
import cardIcon1 from '../assets/images/SV/combine-icon1.svg';
import cardIcon2 from '../assets/images/SV/combine-icon2.svg';
import cardIcon3 from '../assets/images/SV/combine-icon3.svg';
import cardIcon4 from '../assets/images/SV/combine-icon4.svg';




const Combine = () => {
    return (
        <section className="combine py-5">
            <Container>
                <h1 className="text-center mb-5">The ScholarshipVine combines planetary reach and AI to deliver your ideal scholarship or grant</h1>
                <Row className="align-items-stretch">
                    <Col className="d-flex justify-content-center col-lg-4 col-md-12 col-12">
                        <Card className="combine__card shadow" style={{ width: '18rem' }}>       
                        <Card.Img className="mb-2 mt-1" variant="top" src={cardImg1} />                        
                            <Card.Body className="p-4 pt-0">
                            
                                <h5 className="fs-4 mb-2">Tailored to your requirements</h5>
                                <ul className="ps-3 fs-5">
                                    <li>Role</li>
                                    <li>Area of study</li>
                                    <li>Seniority Level</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center col-lg-4 col-md-12 col-12">
                        <Card className="combine__card shadow p-4" style={{ width: '24rem' }}>       
                            <h4 className="text-center mb-3">Our <span style={{color: "#209ad6"}}>Intelligent Scholarship</span> </h4>
                            <div className="d-flex flex-column">
                                <div className="middle__card__item">
                                    <img src={cardIcon1} alt="" />
                                    <span>Cloud Platform Leverages</span>
                                </div>                                
                                <div className="middle__card__item">
                                    <img src={cardIcon2} alt="" />
                                    <span>Global Sourcing</span>
                                </div>                                
                                <div className="middle__card__item">
                                    <img src={cardIcon3} alt="" />
                                    <span>Intelligent Vetting</span>
                                </div>                                
                                <div className="middle__card__item">
                                    <img src={cardIcon4} alt="" />
                                    <span>Extensive Matching</span>
                                </div>                                
                            </div>
                            <Button className="btn-lg me-2 my-1 w-100">
                               <i className="bi-file-play me-2"></i> Watch Video
                            </Button>                            
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center col-lg-4 col-md-12 col-12">
                        <Card className="combine__card shadow" style={{ width: '18rem' }}>       
                            <Card.Img className="mb-2 mt-1" variant="top" src={cardImg2} />                        
                            <Card.Body className="p-4 pt-0">
                            
                                <h5 className="fs-4 mb-2">Your ideal scholarship</h5>
                                <ul className="ps-3 fs-5">
                                    <li>Role</li>
                                    <li>Area of study</li>
                                    <li>Seniority Level</li>
                                </ul>
                            </Card.Body>                            
                        </Card>
                    </Col>                                  
                </Row>
            </Container>                        
        </section>
    );
};

export default Combine;