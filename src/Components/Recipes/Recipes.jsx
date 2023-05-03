import React from "react";
import {Col, Container, Row, Image} from "react-bootstrap";
import {useLoaderData} from "react-router-dom";

const Recipes = () => {
  const chefsDetails = useLoaderData();
  //   console.log({chefsDetails});
  const {chef_name, chef_picture, num_of_recipes} = chefsDetails;
  //   console.log(chef_name);
  return (
    <Container className="w-75" bg="primary">
      <Row className="bg-dark">
        <Col sm={6}>
          <Image src={chef_picture} fluid className="m-2"></Image>
        </Col>
        <Col>texts</Col>
      </Row>
    </Container>
  );
};

export default Recipes;
