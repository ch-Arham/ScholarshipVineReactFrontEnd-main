import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// images
import itemImg1 from '../assets/images/SV/choose-item1.svg';
import itemImg2 from '../assets/images/SV/choose-item2.svg';
import itemImg3 from '../assets/images/SV/choose-item3.svg';



const Choose = () => {
    return (
        <section className="choose py-5"
            style={{backgroundColor: "#fff"}}>
            <Container>
                <h1 className="choose__title mb-5">Why Students & Researchers choose Scholarship Vine</h1>
                <Row>
                    <Col className="col-md-4 col-12 mb-3">
                        <div className="choose__item">  
                            <div className="choose__item__title">
                                <span>
                                    <img src={itemImg1} alt="" />
                                </span>
                                <span className="choose__item__title-text">Speed</span>
                            </div>
                            <div className="choose__item-count">5 days</div>
                            <p>to fill <span>most roles</span>, <br /> sometimes same day.</p>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-12 mb-3">
                        <div className="choose__item">
                            <div className="choose__item__title">
                                <span>
                                    <img src={itemImg2} alt="" />
                                </span>
                                <span className="choose__item__title-text">Time Saved</span>
                            </div>
                            <div className="choose__item-count">50+ hours</div>
                            <p>of time saved <br /><span>per award</span> on interviewing.</p>
                        </div>
                    </Col>
                    <Col className="col-md-4 col-12 mb-3">
                        <div className="choose__item">
                            <div className="choose__item__title">
                                <span>
                                    <img src={itemImg3} alt="" />
                                </span>
                                <span className="choose__item__title-text">Retention</span>
                            </div>
                            <div className="choose__item-count">97%</div>
                            <p>engagement <br /> <span>success rate</span>.</p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>                        
        </section>
    );
};

export default Choose;