import React, { useState, useRef, useLayoutEffect } from "react";
import { TopBar, Footer } from "../components/dashboard";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const leftSide = useRef(null);
  const contentpage = useRef(null);
  const [activeLeftSide, setActiveLeftSide] = useState(true);
  const [activeMobLeftSide, setMobActiveLeftSide] = useState(false);
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

  return (
    <>
      <div id="dashboard">
        <TopBar onToggleMenu={onToggleMenu} onToggleMobMenu={onToggleMobMenu} />
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
