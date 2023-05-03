import React, {useContext} from "react";
import {Container, Button, Navbar, Nav, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Providers/AuthProvider";
// import "../../../index.css";
const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log("header", user);
  const handleLogOut = () => {
    logOut()
      .then(() => alert("logged out!"))
      .catch(error => console.log(error.message));
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
                className="mx-auto  my-lg-0 text-decoration-none px-3 d-flex"
                style={{maxHeight: "100px", backgroundColor: "#f4eded"}}
                navbarScroll
              >
                <Link
                  to="/"
                  className="text-decoration-none me-5 text-black fs-6 fw-semibold bg-transparent"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="text-decoration-none m-0 fs-6 fw-semibold text-dark bg-transparent flex-grow-1"
                >
                  Blog
                </Link>

                {!user && (
                  <>
                    {" "}
                    <Link
                      to="/login"
                      className="text-decoration-none ms-md-5 me-5 fs-6 fw-semibold text-black bg-transparent"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="text-decoration-none me-5 fs-6 fw-semibold text-black bg-transparent"
                    >
                      Register
                    </Link>
                  </>
                )}
              </Nav>
              <div className="d-flex align-items-center">
                {user && (
                  <>
                    <img
                      src={user.photoURL}
                      className="rounded-circle text-decoration-none me-2 fs-6 fw-semibold text-black bg-transparent"
                      style={{width: "40px", height: "40px"}}
                    />
                    <Button
                      onClick={handleLogOut}
                      className="rounded-pill  bg-danger border-0"
                    >
                      Sign Out
                    </Button>
                  </>
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
