import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Pages = ({ pagesList }) => {
    return (
        <section className="py-5 bg-body border-bottom border-top">
            <Container>
                <Row className="pb-3">
                    <Col lg={12}>
                        <div className="text-center">
                            <h1 className="mb-1">People <span style={{color: 'var(--bs-danger)'}}><i className="bi-heart-fill"></i></span> ScholarshipVine</h1>
                            <p className="text-dark">
                            Each year the University may award scholarships known as the ScholarshipVine
                                <br />
                                and We have plenty of Scholarships.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-4">
                    {(pagesList || []).map((item, index) => {
                        return (
                            <Col key={index} xl={4} md={6}>
                                <Card className="border-0">
                                    <Card.Body className="shadow-none text-center">
                                        <Link to={item.pageUrl}>
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="shadow-sm rounded img-thumbnail animate"
                                            />
                                            <h5 className="mt-3 fs-16">{item.name}</h5>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>

                <Row>
                    <Col className="text-center py-4">
                        <Link to="/login" className="btn btn-success shadow-sm">
                            Load More
                            <i className="bi bi-arrow-right-short icon-xs ms-1"></i>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Pages;
