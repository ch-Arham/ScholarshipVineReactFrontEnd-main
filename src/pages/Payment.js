import React, { useState, useRef, useLayoutEffect } from "react";
import { PaystackButton } from "react-paystack";
import { Form } from "react-bootstrap";
import { TopBar, Footer } from "../components/dashboard";
import { Link } from "react-router-dom";

const Payment = () => {
  const leftSide = useRef(null);
  const contentpage = useRef(null);
  const [activeLeftSide, setActiveLeftSide] = useState(true);
  const [activeMobLeftSide, setMobActiveLeftSide] = useState(false);
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

  const publicKey = "pk_test_5e08f7d04d963ec91e21f8db0579466f2f089515";
  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thank You For Paying"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  return (
    <>
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
          <li className="mb-2">
            <Link onClick={() => setModalShow(true)} to="/payment">
              Payment
            </Link>
          </li>
        </ul>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "3em" }}>
        Payment for Scholarship Vine
      </h1>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80vw",
            height: "65vh",
            flexDirection: "column",
            marginLeft: "13em",
          }}
        >
          <Form
            style={{ width: "80%", border: "1px solid lightgray" }}
            className="p-3 shadow"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
          </Form>
          <PaystackButton
            {...componentProps}
            className="d-flex mt-2 py-2 px-5 rounded bg-primary text-white border-0"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Payment;
