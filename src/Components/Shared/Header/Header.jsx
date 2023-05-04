import React, {useContext} from "react";
import {Container, Button, Navbar, Nav, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Providers/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";

import {Tooltip} from "react-tooltip";
import ActiveLink from "./ActiveLink";
// import "../../../index.css";
const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("logged out!"))
      .catch(error => error.message);
  };
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
          <Container fluid style={{backgroundColor: "#f4eded"}} className="p-2">
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse
              id="navbarScroll"
              style={{backgroundColor: "#f4eded"}}
            >
              <Nav
                className="me-auto mt-2 my-3 my-md-0 text-decoration-none px-3 d-flex"
                style={{maxHeight: "100px", backgroundColor: "#f4eded"}}
                navbarScroll
              >
                <ActiveLink
                  to="/"
                  className="text-decoration-none me-5 text-black fs-6 fw-semibold bg-transparent"
                >
                  Home
                </ActiveLink>
                <ActiveLink
                  to="/blog"
                  className="text-decoration-none m-0 fs-6 fw-semibold text-dark bg-transparent flex-grow-1"
                >
                  Blog
                </ActiveLink>

                {!user && (
                  <>
                    <ActiveLink
                      to="/register"
                      className="text-decoration-none ms-md-5 me-5 fs-6 fw-semibold text-black bg-transparent"
                    >
                      Register
                    </ActiveLink>
                  </>
                )}
              </Nav>
              <div className="d-flex align-items-md-center flex-column flex-md-row w-md-50">
                {user ? (
                  <>
                    <img
                      src={user.photoURL}
                      className="my-anchor-element rounded-circle text-decoration-none me-2 ms-md-1 ms-2 fs-6 fw-semibold text-black bg-transparent my-md-0 mb-2"
                      style={{width: "40px", height: "40px"}}
                    />
                    <Tooltip anchorSelect=".my-anchor-element" place="top">
                      {user.displayName ? user.displayName : ""}
                    </Tooltip>

                    <Button
                      onClick={handleLogOut}
                      className="rounded-pill bg-danger border-0 w-sm-25 w-100"
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <ActiveLink
                    to="/login"
                    className="text-decoration-none ms-md-5 fw-semibold text-black bg-transparent"
                  >
                    <Button
                      className="rounded-pill border-0"
                      style={{background: "#5a5f70"}}
                    >
                      Login
                    </Button>
                  </ActiveLink>
                )}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
