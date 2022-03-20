import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { register } from "../redux/authentications/authActions";
import { useDispatch, useSelector } from "react-redux";
import { BsCalendar2Date } from "react-icons/bs";
import { BiWorld, BiUser } from "react-icons/bi";
import { FaRegAddressBook } from "react-icons/fa";
import { BsTelephoneInboundFill, BsGenderAmbiguous } from "react-icons/bs";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { getUser } from "../redux/profile/userActions";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    bvn: "",
    userName: "",
    fullName: "",
    phoneNumber: "",
    gender: "",
    country: "",
    address: "",
    dateOfBirth: "",
  });
  const { isAuth, error } = useSelector((state) => state.auth);
  const User = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(error);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // if (isError) {
    //   alert("Invalid email or password");
    //   setIsError(false);
    // }
    if (user.email === "" || user.password === "") {
      alert("Please fill all the fields");
    }
    register(dispatch, user);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };


  useEffect(() => {
    if (isAuth && User) {
      getUser(dispatch, User._id);
      navigate("/dashboard");
    }
  }, [isAuth, navigate, User, dispatch]);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="d-flex  justify-content-center my-5">
          <Card style={{ maxWidth: "40rem", width: "100%" }}>
            <Card.Body>
              <h2 className="text-center mb-0 mt-3 mb-2">
                Sign Up To Create Your Account
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
                      placeholder="Enter Your Email Address"
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
                      placeholder="Enter Your Password"
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
                      <BiUser style={{ fontSize: "2em", color: "#6c757d" }} />
                    </span>
                    <input
                      placeholder="Enter Your username"
                      value={user.userName}
                      name="userName"
                      type="text"
                      id="userName"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">BVN</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <AiOutlineFieldNumber
                        style={{ fontSize: "2em", color: "#6c757d" }}
                      />
                    </span>
                    <input
                      placeholder="BVN"
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
                      <BsGenderAmbiguous
                        style={{ fontSize: "2em", color: "#6c757d" }}
                      />
                    </span>
                    <input
                      placeholder="State Your Gender"
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
                  <label className="form-label">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <MdDriveFileRenameOutline
                        style={{ fontSize: "2em", color: "#6c757d" }}
                      />
                    </span>
                    <input
                      placeholder="Enter Your Full Name"
                      value={user.fullName}
                      name="fullName"
                      type="text"
                      id="fullName"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <BsTelephoneInboundFill
                        style={{ fontSize: "1.5em", color: "#6c757d" }}
                      />
                    </span>
                    <input
                      placeholder="Enter Your Phone Number"
                      value={user.phoneNumber}
                      name="phoneNumber"
                      type="text"
                      id="phoneNumber"
                      className="form-control"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Address</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaRegAddressBook
                        style={{ fontSize: "2em", color: "#6c757d" }}
                      />
                    </span>
                    <input
                      placeholder="Enter Your Address"
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
                  <label className="form-label">Country</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <BiWorld style={{ fontSize: "2em", color: "#6c757d" }} />
                    </span>
                    <input
                      placeholder="Enter Your Country"
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
                  <label className="form-label">Date of Birth</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <BsCalendar2Date
                        style={{ fontSize: "2em", color: "#6c757d" }}
                      />
                    </span>
                    <input
                      placeholder="Date of Birth"
                      value={user.dateOfBirth}
                      name="dateOfBirth"
                      type="date"
                      id="dateOfBirth"
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
                  <Link
                    to="/login"
                    className="btn btn-white mb-2 mb-sm-0 me-1 px-4"
                  >
                    Login
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
