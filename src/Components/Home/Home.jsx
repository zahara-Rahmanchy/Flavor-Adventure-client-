import React, {useEffect, useState} from "react";
import {Container, Button, Form, Row, Col, Card} from "react-bootstrap";
import {AiTwotoneLike} from "react-icons/ai";
const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setChefs(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h4 className="text-center fst-italic">Our Chefs</h4>
          {chefs.map(d => (
            <Card className="my-3 w-75 mx-auto rounded-3 p-3">
              <img src={d.chef_picture} className="rounded-3 mb-3" />
              <Card.Body>
                <Card.Title>{d.chef_name}</Card.Title>
                <Card.Text className="d-md-flex">
                  <p className="text-black fs-6 flex-md-grow-1">
                    Years of Experience:
                    <span className="ps-2 text-danger">
                      {d.years_of_experience} years
                    </span>
                  </p>
                  <p className="text-black fs-6">
                    Number of Recipes:{" "}
                    <span className="text-danger">
                      {d.num_of_recipes} dishes{" "}
                    </span>
                  </p>
                </Card.Text>
                <div className="d-flex justify-content-between align-items-md-center flex-column-reverse flex-md-row">
                  <Button style={{backgroundColor: "#e35640", border: "none"}}>
                    View Recipes
                  </Button>
                  <p className="text-center">
                    <AiTwotoneLike className="text-primary fs-5 mx-1 text-center" />
                    <small className="text-secondary">{d.likes} Likes</small>
                  </p>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      ;
    </Container>
  );
};

export default Home;
