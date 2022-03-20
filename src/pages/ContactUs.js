import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { TopBar, Footer } from "../components/dashboard";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/profile/userActions";
import { Modal, Button } from "react-bootstrap";

const ContactUs = () => {
  const leftSide = useRef(null);
  const contentpage = useRef(null);
  const [activeLeftSide, setActiveLeftSide] = useState(true);
  const [activeMobLeftSide, setMobActiveLeftSide] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);
  const onToggleMenu = () => {
    setActiveLeftSide(!activeLeftSide);
    if (!activeLeftSide) {
      leftSide.current.classList.remove("hidemenu");
      contentpage.current.style.marginLeft = "250px";
    } else {
      leftSide.current.classList.add("hidemenu");
      contentpage.current.style.marginLeft = "70px";
    }
  };

  const onToggleMobMenu = () => {
    setMobActiveLeftSide(!activeMobLeftSide);
    if (!activeMobLeftSide) {
      leftSide.current.classList.add("show");
    } else {
      leftSide.current.classList.remove("show");
    }
  };

  const handleResize = () => {
    if (leftSide.current.classList.contains("hidemenu")) {
      leftSide.current.classList.remove("hidemenu");
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const form = useRef();

  const [note, setNote] = useState({
    user_email: "",
    user_name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_11rwgkn",
        "template_48lugu8",
        form.current,
        "R6fb_jbvfs6hW7FE3"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent Successfully", "success");
        },
        (error) => {
          console.log(error.text);
          alert("Email Was Not Sent. Enter Correct Details", "danger");
        }
      );
    setNote({ user_email: "", user_name: "", message: "" });
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  React.useEffect(() => {
    if (!isAuth) {
      localStorage.removeItem("authToken");
      navigate("/login");
    }
  }, [isAuth, navigate]);
  useEffect(() => {
    if (user) {
      setLoading(true);
      const userId = user._id;
      getUser(dispatch, userId);
      setCurrentUser(profile);
      setLoading(false);
    }
  }, [user, profile, dispatch]);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div id="dashboard">
        <TopBar onToggleMenu={onToggleMenu} onToggleMobMenu={onToggleMobMenu} />
        {currentUser && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Welcome {currentUser.fullName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <span className="bg-dark text-light p-1 m-1">E-Mail:</span>
                {currentUser.email}
              </div>
              <br />
              <div>
                <span className="bg-dark text-light p-1 m-1">Gender:</span>
                {currentUser.gender}
              </div>
              <br />
              <div>
                <span className="bg-dark text-light p-1 m-1">BVN:</span>
                {currentUser.bvn}
              </div>
              <br />

              <div>
                <span className="bg-dark text-light p-1 m-1">Address:</span>
                {currentUser.address}
              </div>
              <br />
              <div>
                <span className="bg-dark text-light p-1 m-1">DOB:</span>
                {currentUser.dateOfBirth}
              </div>
              <br />
              <div>
                <span className="bg-dark text-light p-1 m-1">Country:</span>
                {currentUser.country}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <div className="left-side-menu" ref={leftSide}>
          <ul className="list-unstyled ms-4">
            <li className="mb-2">
              <Link to="/dashboard">Grants Opportunity List</Link>
            </li>
            <li className="mb-2">
              <Link to="/contactus">Contact us</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Main Page</Link>
            </li>
            <li className="mb-2">
              {currentUser && (
                <Link onClick={handleShow} to="#">
                  Profile
                </Link>
              )}
            </li>
            <li className="mb-2">
              <Link onClick={() => setModalShow(true)} to="/payment">
                Payment
              </Link>
            </li>
          </ul>
        </div>
        <div ref={contentpage} className="content-page">
          <div className="content">
            {/* <Container fluid> */}
            <Form ref={form} className="p-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter Email"
                  name="user_email"
                  value={note.user_email}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  minLength={3}
                  type="text"
                  placeholder="Enter Name"
                  name="user_name"
                  value={note.user_name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message To Be Mailed</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Message"
                  required
                  value={note.message}
                  name="message"
                  minLength={5}
                  onChange={handleChange}
                  className="p-2"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  display: "block",
                  margin: "0 auto",
                  padding: "7px 140px",
                }}
                disabled={note.user_name.length < 3 || note.message.length < 5}
              >
                Send Email
              </Button>
            </Form>
            {/* </Container> */}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
