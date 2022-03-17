import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// images
 import backImg from '../assets/images/SV/garner-bg1.jpg';
 import itemImg1 from '../assets/images/SV/garner-item1.svg';
 import itemImg2 from '../assets/images/SV/garner-item2.svg';
 import itemImg3 from '../assets/images/SV/garner-item3.svg';


const Garner = () => {
    return (
        <section
            className="garner-section"
            style={{ background: `url(${backImg}) no-repeat center`, backgroundSize:'cover'}}>
            <div className="garner__layer">
                <Container>
                    <div className="garner__inner py-5 text-center">
                        <h1>Students & Researchers are in competition to garner the benefits of the best scholarships and grants</h1>
                        <Row className="mt-5 justify-content-center">
                            <Col className="col-xl-4 col-md-6 col-12">
                                <div className="garner__item">
                                    <span className="garner__item__img">
                                        <img src={itemImg1} alt="" />
                                    </span>
                                    <span className="garner__item__text">Pool of Scholarships & Grants for any category</span>
                                </div>
                            </Col>
                            <Col className="col-xl-4 col-md-6 col-12">
                                <div className="garner__item">
                                    <span className="garner__item__img">
                                        <img src={itemImg2} alt="" />
                                    </span>
                                    <span className="garner__item__text">Millions of untapped scholarships & grants</span>
                                </div>
                            </Col>
                            <Col className="col-xl-4 col-md-12 col-12 d-flex justify-content-center">
                                <div className="garner__item">
                                    <span className="garner__item__img">    
                                        <img src={itemImg3} alt="" />
                                    </span>
                                    <span className="garner__item__text">Proven success</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>  
            </div>            
        </section>
    );
};

export default Garner;