import React from "react";
import {Col, Row, Form, Button} from "react-bootstrap";
import {BsSearch, BsTwitter, BsLinkedin, BsFacebook} from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai";
const Footer = () => {
  return (
    <div style={{background: " #F4EDED"}} className="mt-5 mx-0 pt-5 px-0">
      <Row className="m-0">
        <Col md={4} sm={12}>
          <div className="d-flex align-items-center  flex-column p-5 justify-content-between">
            {/* <img src={logo} alt="logo" /> */}

            <div className="flex-md-grow-1 mb-0">
              <h4 className="text-black  fst-italic">FlavorAdventure</h4>
              <p style={{color: "#e35640"}}>
                <small>COOKING FOR THE SOUL</small>
              </p>
            </div>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 border-top-0 border-end-0  border-start-0 "
                aria-label="Search"
              />
              <Button style={{backgroundColor: "#e35640", border: "none"}}>
                <BsSearch />
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={4} className="p-md-5 px-5 py-2">
          <div className="px-5 ">
            <h5 className="text-black text-center">Need help?</h5>
            <p className="text-secondary text-center">
              Contact us via phone or email
            </p>

            <p className="text-center">
              <span
                style={{color: "#e35640"}}
                className="fw-semibold me-1 fs-4"
              >
                M:{" "}
              </span>{" "}
              +1 555 555 665
            </p>
            <p className="text-center">
              <span
                style={{color: "#e35640"}}
                className="fw-semibold me-1 fs-4"
              >
                E:
              </span>
              flavorAdventure@gmail.com
            </p>
          </div>
        </Col>
        <Col md={4} className="p-md-5 px-5 pt-3 pb-4">
          <h5 className="text-black mb-3 text-center">Follow Us On </h5>
          <div className="d-flex justify-content-between p-3 g-3 align-items-center">
            <BsFacebook
              style={{background: "#e35640", width: "60px"}}
              className="fs-1 p-1  text-white"
            />
            <AiOutlineInstagram
              style={{background: "#e35640", width: "60px"}}
              className="fs-1 p-1  text-white"
            />
            <BsTwitter
              style={{background: "#e35640", width: "60px"}}
              className="fs-1 p-1  text-white"
            />
            <BsLinkedin
              style={{background: "#e35640", width: "60px"}}
              className="fs-1 p-1  text-white"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
