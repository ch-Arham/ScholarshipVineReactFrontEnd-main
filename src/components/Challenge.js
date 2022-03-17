import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// images
import leftImg from '../assets/images/SV/challenge-left.png';
import itemImg1 from '../assets/images/SV/challenge-item1.svg';
import itemImg2 from '../assets/images/SV/challenge-item2.svg';
import itemImg3 from '../assets/images/SV/challenge-item3.svg';



const Challenge = () => {
    return (
        <section className="challenge py-5"
            style={{backgroundColor: "#fff"}}>
            <Container>
                <Row className="align-items-center">
                    <Col className="col-xl-6 col-lg-6 col-md-12 col-12 mb-3">
                        <img className="challenge__img__left mx-auto d-block img-fluid" src={leftImg} alt="" />
                    </Col>
                    <Col className="col-xl-6 col-lg-6 col-md-12 col-12">
                       <div className="challenge__content">
                            <h2 className="challenge__title">Getting Scholarships is Challenging because</h2>
                            <div className="challenge__item d-flex align-items-center my-3">
                                <div>
                                    <img src={itemImg1} alt="" />
                                </div>
                                <div>
                                    <p className="mb-0 ms-2">Building an extensive global pipeline to find great  Scholarships and grant awarding institutions  is challenging</p>
                                </div>
                            </div>
                            <div className="challenge__item d-flex align-items-center my-3">
                                <div>
                                    <img src={itemImg2} alt="" />
                                </div>
                                <div>
                                    <p className="mb-0 ms-2">Applying to the best scholarships and grants in your domain without taking up all of the time is challenging</p>
                                </div>
                            </div>
                            <div className="challenge__item d-flex align-items-center my-3">
                                <div>
                                    <img src={itemImg3} alt="" />
                                </div>
                                <div>
                                    <p className="mb-0 ms-2">Getting access to the right people  in a way that is secure is challenging</p>
                                </div>
                            </div>

                        </div> 
                    </Col>
                </Row>
            </Container>                        
        </section>
    );
};

export default Challenge;