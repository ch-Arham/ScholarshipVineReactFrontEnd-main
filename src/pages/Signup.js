import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { register } from "../redux/authentications/authActions";
import { useDispatch, useSelector } from "react-redux";
const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
    bvn: "",
    username: "",
    first_name: "",
    last_name: "",
    full_name: "",
    phone_number: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    promo_code: "",
    date_of_birth: "",
    country_code: "",
    profile_type: "",
    question_1: "What is your favorite color?",
    question_2: "What is your name?",
    question_3: "What is your favorite food?",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    image_id: "NIN",
    is_active: true,
    user_type: "",
    tenant_id: "",
    is_staff: false,
  });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register(dispatch, user);
  };
  return (
    <>
      <NavBar />
      <Container>
        <Row className="d-flex  justify-content-center my-5">
          <Card style={{ maxWidth: "40rem", width: "100%" }}>
            <Card.Body>
              <h2 className="text-center mb-0 mt-3 mb-2">
                Sign up for an Account
              </h2>
              <p className="text-center text-muted mt-1 mb-4">
                Create your account now.
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
                      placeholder="Email Address"
                      value={user.email}
                      name="email"
                      type="email"
                      id="email"
                      className="form-control"
                      onChange={onChange}
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
                      value={user.password}
                      name="password"
                      type="password"
                      id="password"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Username</label>
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
                        className="info icon-dual"
                      >
                        <g>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </g>
                      </svg>
                    </span>
                    <input
                      placeholder="username"
                      value={user.username}
                      name="email"
                      type="email"
                      id="email"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">BVN</label>
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
                      placeholder="bvn"
                      value={user.bvn}
                      name="bvn"
                      type="text"
                      id="bvn"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Gender</label>
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
                      placeholder="gender"
                      value={user.gender}
                      name="gender"
                      type="gender"
                      id="gender"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">First Name</label>
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
                      placeholder="first name"
                      value={user.first_name}
                      name="first_name"
                      type="text"
                      id="first_name"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Last Name</label>
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
                      placeholder="last name"
                      value={user.last_name}
                      name="last_name"
                      type="text"
                      id="last_name"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Full Name</label>
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
                      placeholder="full name"
                      value={user.full_name}
                      name="full_name"
                      type="text"
                      id="full_name"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Phone Number</label>
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
                      placeholder="phone number"
                      value={user.phone_number}
                      name="phone_number"
                      type="text"
                      id="phone_number"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Address</label>
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
                      placeholder="address"
                      value={user.address}
                      name="address"
                      type="text"
                      id="address"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">City</label>
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
                      placeholder="city"
                      value={user.city}
                      name="city"
                      type="text"
                      id="city"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">State</label>
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
                      placeholder="state"
                      value={user.state}
                      name="state"
                      type="text"
                      id="state"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Pin</label>
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
                      placeholder="pin"
                      value={user.pin}
                      name="pin"
                      type="text"
                      id="pin"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Promo</label>
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
                      placeholder="promo"
                      value={user.promo}
                      name="promo"
                      type="text"
                      id="promo"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Country</label>
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
                      placeholder="country"
                      value={user.country}
                      name="country"
                      type="text"
                      id="country"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Country Code</label>
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
                      placeholder="country code"
                      value={user.country_code}
                      name="country_code"
                      type="text"
                      id="countryCode"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Date of birth</label>
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
                      placeholder="date of birth"
                      value={user.date_of_birth}
                      name="date_of_birth"
                      type="text"
                      id="dateOfBirth"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Profile Type</label>
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
                      placeholder="profile type"
                      value={user.profile_type}
                      name="profile_type"
                      type="text"
                      id="profileType"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Question 1</label>
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
                      placeholder="What is your favorite color?"
                      value={user.answer_1}
                      name="question_1"
                      type="text"
                      id="question1"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Question 2</label>
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
                      placeholder="What is your name?"
                      value={user.answer_2}
                      name="question_2"
                      type="text"
                      id="question2"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Question 3</label>
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
                      placeholder="What is your favorite food?"
                      value={user.answer_3}
                      name="question_3"
                      type="text"
                      id="question3"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Phone Number</label>
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
                      placeholder="phone number"
                      value={user.phone_number}
                      name="phone_number"
                      type="text"
                      id="phone_number"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="btn btn-primary"
                  >
                    Signup
                  </button>
                  <Link to="/dashboard" className="text-center d-grid"></Link>
                </div>
              </form>

              <div className="py-3 text-center">
                <span className="fs-16 fw-bold">OR</span>
              </div>
              <Row>
                <Col xs={12} className="text-center mb-4">
                  <Link to="#" className="btn btn-white mb-2 mb-sm-0 me-1">
                    <i className="uil uil-google icon-google me-2"></i>
                    With Google
                  </Link>
                  <Link to="#" className="btn btn-white mb-2 mb-sm-0">
                    <i className="uil uil-facebook me-2 icon-fb"></i>
                    With Facebook
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

export default Signup;
