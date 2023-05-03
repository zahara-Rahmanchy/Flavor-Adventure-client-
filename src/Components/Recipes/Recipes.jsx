import React from "react";
import {Col, Container, Row, Image, Card} from "react-bootstrap";
import {useLoaderData} from "react-router-dom";
import {AiTwotoneLike} from "react-icons/ai";
import "../../index.css";
const Recipes = () => {
  const chefsDetails = useLoaderData();
  //   console.log({chefsDetails});
  const {
    chef_name,
    chef_picture,
    num_of_recipes,
    description,
    years_of_experience,
    likes,
  } = chefsDetails;
  //   console.log(chef_name);
  //   style={{
  //     backgroundColor: "rgba(227, 86, 64, 0.5)",
  //     border: "none",
  //   }}
  return (
    <>
      <Container className="w-100" bg="primary">
        <Row
          className="w-100 mx-auto p-3 rounded-3"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), linear-gradient(rgba(227, 86, 64, 1), rgba(227, 86, 64, 1))",
          }}
        >
          <Col sm={6}>
            <Card className="bg-transparent border-0">
              <Card.Title className="mx-4 mb-0 fst-italic fw-bold text-black">
                {chef_name}
              </Card.Title>
              <Card.Subtitle className="mb-2">
                <hr className="mt-1 w-25 ms-4 text-black fw-bold" />
              </Card.Subtitle>
              <Card.Img
                variant="top"
                src={chef_picture}
                className="rounded-pill  p-4 bg-transparent w-75"
              />
              <Card.Body></Card.Body>
            </Card>
          </Col>
          <Col>
            <Card.Body
              className="mt-3 text-white p-2 rounded-3"
              style={{background: "rgba(0,0,0,0.3)"}}
            >
              <Card.Text className="p-2">{description}</Card.Text>
              <p className=" bg-transparent">
                <AiTwotoneLike className="text-primary fs-5 mx-1 text-center bg-transparent" />
                <small className="text-white fw-semibold bg-transparent">
                  {likes} Likes
                </small>
              </p>
              <Card.Text className="d-md-flex bg-transparent p-2">
                <p className="fs-6 flex-md-grow-1 bg-transparent">
                  Years of Experience:
                  <span className="ps-2  bg-transparent">
                    {years_of_experience} years
                  </span>
                </p>
                <p className="fs-6 bg-transparent pe-2 me-2">
                  Number of Recipes:{" "}
                  <span className=" bg-transparent">
                    {num_of_recipes} dishes{" "}
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Recipes;
