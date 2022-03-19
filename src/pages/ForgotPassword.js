import React, { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { NavBar, Footer } from "../components";
import axios  from 'axios';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:5000/api/auth/forgotpassword",{
        email
    });

    if(response.data.success){
        alert('check your email for your new password');
        setTimeout(()=>navigate('/login'),1000);
    }else{
        alert('Something went wrong, try again later');
    }
    
  };
 

  return (
    <>
      <NavBar />
      <Container>
        <Row className="d-flex  justify-content-center my-5">
          <Card style={{ maxWidth: "40rem", width: "100%" }}>
            <Card.Body>
              <h2 className="text-center mb-0 mt-3 mb-2">Reset Password</h2>
              <p className="text-center text-muted mt-1 mb-4">
                Enter your email address and your new password will be sent to it.
              </p>

              <form className="authentication-form" noValidate>
                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-mail icon-dual"
                      >
                        <g>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </g>
                      </svg>
                    </span>
                    <input
                      placeholder="hello@inbox.com"
                      value={email}
                      name="email"
                      type="email"
                      id="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <button
                    onClick={handleClick}
                    className="btn btn-primary px-3"
                  >
                    Reset Password
                  </button>
                  <Link to="/dashboard" className="text-center d-grid"></Link>
                </div>
              </form>

             
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ForgotPassword;
