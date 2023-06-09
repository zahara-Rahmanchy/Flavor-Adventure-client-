import React, {useContext, useState} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {Container, Button, Form} from "react-bootstrap";
import {AuthContext} from "../../Providers/AuthProvider";

const Login = () => {
  const {logIn, logInWithGoogle, user, logInWithGithub} =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("login loc", location);

  const fromCurrentLocation = location.state?.from?.pathname || "/";

  const handleLogin = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    } else if (!/^?=.*[0-9]$/) {
      setError("Password should contain at least one number");
    } else if (!/^[a-z 0-9]+@(gmail|yahoo).com$/.test(email)) {
      setError("Invalid Email");
      return;
    }
    // console.log(email, password);
    logIn(email, password)
      .then(userCredential => {
        // console.log(userCredential.user);

        navigate(fromCurrentLocation, {replace: true});
      })
      .catch(error => {
        // console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(result => {
        const loggedInUser = result.user;

        // console.log(loggedInUser);

        navigate(fromCurrentLocation, {replace: true});
      })
      .catch(error => {
        setError("error", error.message);
      });
  };
  const handleGithubLogin = () => {
    logInWithGithub()
      .then(result => {
        const loggedInUser = result.user;

        // console.log(loggedInUser);

        navigate(fromCurrentLocation, {replace: true});
      })
      .catch(error => {
        setError(error.message);
        // console.log("error", error.message);
      });
  };

  return (
    <>
      <Container className="w-50 w-100 mx-auto my-4 p-3" fluid="md">
        <Form
          className="w-50 mx-auto p-4 rounded-2 bg-danger bg-opacity-10"
          onSubmit={handleLogin}
        >
          <h5 className="text-center bg-transparent m-2 fst-italic text-danger">
            {" "}
            Please Login{" "}
          </h5>

          <Form.Group
            className="mb-3 bg-transparent"
            controlId="formGroupEmail"
          >
            <Form.Label className="bg-transparent">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 bg-transparent"
            controlId="formGroupPassword"
          >
            <Form.Label className="bg-transparent">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>

          {error && (
            <p className=" bg-transparent pb-1">
              <small className=" bg-transparent" style={{color: "#ff0c0c"}}>
                {error}
              </small>
            </p>
          )}

          <Button variant="danger" type="submit" className="mb-2 w-50">
            Login
          </Button>
          <br></br>
          <Form.Text className="text-black bg-transparent pt-3">
            Don't have an Account?
            <Link to="/register" className="ms-2 bg-transparent">
              Please Register
            </Link>
          </Form.Text>
        </Form>
        <div className="mx-auto w-50 mt-2 d-flex">
          <Button
            variant="primary"
            className="my-1 w-75"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </Button>
          <br></br>
          <Button
            variant="dark"
            className="my-1 w-75 ms-5"
            onClick={handleGithubLogin}
          >
            Login with GitHub
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Login;
