import React from "react";
import Form from "react-bootstrap/Form";
import {Container, Button} from "react-bootstrap";
const Register = () => {
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;

    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    console.log(name, email, password, conPassword, photo);
  };
  return (
    <>
      <Container className="w-50 mx-auto my-4 p-3 rounded">
        <Form
          className="w-50 mx-auto p-4 bg-danger bg-opacity-10 rounded-md"
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
              type="text"
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

          <Button variant="danger" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
