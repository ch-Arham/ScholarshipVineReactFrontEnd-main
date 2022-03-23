import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { TopBar, Footer } from "../components/dashboard";
import Initial from "../components/xmlScholar/Initial";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/profile/userActions";
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.user);
  const leftSide = useRef(null);
  const contentpage = useRef(null);
  const [activeLeftSide, setActiveLeftSide] = useState(true);
  const [activeMobLeftSide, setMobActiveLeftSide] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [loading, setLoading] = useState(false);

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
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
  }, [user, dispatch, profile]);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <ScrollToTop
        smooth
        style={{ background: "lightgray", borderRadius: "50%" }}
      />
      <div id="dashboard">
        <TopBar onToggleMenu={onToggleMenu} onToggleMobMenu={onToggleMobMenu} />
        <div className="left-side-menu" ref={leftSide}>
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
            <Initial />
            {/* </Container> */}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
