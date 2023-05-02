import React from "react";
import {Container, Button, Navbar, Nav, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <Container className="mt-5 p-3">
        <div className="d-flex mb-3 align-items-center flex-md-row flex-column">
          {/* <img src={logo} alt="logo" /> */}

          <div className="flex-md-grow-1 mb-0">
            <h4 className="text-black  fst-italic">FlavorAdventure</h4>
            <p className="text-danger">
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
            <Button variant="danger">Search</Button>
          </Form>
        </div>

        <Navbar bg="bg-light" color="white" expand="lg">
          <Container fluid style={{backgroundColor: "#f9f6f6"}} className="p-2">
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0 text-decoration-none px-3"
                style={{maxHeight: "100px"}}
                navbarScroll
              >
                <Link to="/" className="text-decoration-none me-3 text-black">
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="text-decoration-none me-3 text-black"
                >
                  Blog
                </Link>
                <Link
                  to="/login"
                  className="text-decoration-none me-3 text-black"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-decoration-none me-3 text-black"
                >
                  Register
                </Link>
                <Link className="text-decoration-none me-3 text-black">
                  UserProfile
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
