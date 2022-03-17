import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col sm={6} md={4}>
                        {currentYear} &copy; ScholarshipVine. All reserved
                    </Col>

                    <Col sm={6} md={6}>
                        <div className="text-sm-end footer-links d-none d-sm-block">
                            <Link to="#">Scholarships</Link>
                            <Link to="#">Company</Link>
                            <Link to="#">Contact</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
