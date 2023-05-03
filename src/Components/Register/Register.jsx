import React, {useContext, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {Container, Button} from "react-bootstrap";
import {AuthContext} from "../../Providers/AuthProvider";
import {updateProfile} from "firebase/auth";

const Register = () => {
  const {user, createUser} = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;

    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    console.log(name, email, password, conPassword, photo);

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    } else if (password != conPassword) {
      setError("Password doesn't match");
    }
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;

        alert("Registerd Successfully");
        update(createdUser, name, photo);
        <Navigate to="/login"></Navigate>;
      })
      .catch(error => {
        // console.log(error);
        setError(error.message);
      });

    const update = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => console.log("updated"))
        .catch(error => setError(error.message));
    };
  };
  return (
    <>
      <div className="w-50 mx-auto my-4 p-3 rounded">
        <Form
          className="w-75  mx-auto p-4 bg-danger bg-opacity-10 rounded-2"
          onSubmit={handleRegister}
        >
          <h5 className="text-center bg-transparent m-2 fst-italic text-danger">
            {" "}
            Please Register{" "}
          </h5>
          <Form.Group className="mb-3 bg-transparent">
            <Form.Label className="bg-transparent">Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" required />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text-area"
              name="photo"
              placeholder="Photo URL"
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
          <Form.Group className="mb-3 bg-transparent">
            <Form.Label className="bg-transparent">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="conPassword"
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
          <Button variant="danger" type="submit" className="mb-1 w-50">
            Register
          </Button>
          <br />
          <Form.Text className="text-black bg-transparent pt-3">
            Already have an Account?{" "}
            <Link to="/login" className="ms-2 bg-transparent">
              Please Login
            </Link>
          </Form.Text>
        </Form>
      </div>
    </>
  );
};

export default Register;
