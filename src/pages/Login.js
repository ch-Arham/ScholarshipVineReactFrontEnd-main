import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authentications/authActions";
import { getUser } from "../redux/profile/userActions";
const Login = () => {
  const { isAuth, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (error === true) {
      alert("Invalid email or password");
    }
    if (email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      const User = {
        email: email,
        password: password,
      };
      login(dispatch, User);
    }
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="d-flex  justify-content-center my-5">
          <Card style={{ maxWidth: "40rem", width: "100%" }}>
            <Card.Body>
              <h2 className="text-center mb-0 mt-3 mb-2">Welcome back!</h2>
              <p className="text-center text-muted mt-1 mb-4">
                Enter your email address and password to access admin panel.
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
                <div className="mb-4">
                  <label className="form-label">Password</label>
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
                        className="feather feather-lock icon-dual"
                      >
                        <g>
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </g>
                      </svg>
                    </span>
                    <input
                      placeholder="Enter your Password"
                      value={password}
                      name="password"
                      type="password"
                      id="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      name="checkbox"
                      type="checkbox"
                      id="checkbox"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label
                      title=""
                      htmlFor="checkbox"
                      className="form-check-label"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button onClick={handleClick} className="btn btn-primary px-3">
                    Log In
                  </button>
                  <Link to="/dashboard" className="text-center d-grid"></Link>
                </div>
              </form>

              <div className="py-3 text-center">
                <span className="fs-16 fw-bold">OR</span>
              </div>
              <Row>
                <Col xs={12} className="text-center mb-4">
                  <Link
                    to="/signup"
                    className="btn btn-white mb-2 mb-sm-0 me-1"
                  >
                    Create and Account
                  </Link>
                  <Link to="/forgotpassword" className="btn btn-white mb-2 mb-sm-0">
                    Forgot Password
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
