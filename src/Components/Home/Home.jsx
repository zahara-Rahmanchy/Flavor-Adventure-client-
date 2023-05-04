import React, {useEffect, useState} from "react";
import {Container, Button, Form, Row, Col, Card} from "react-bootstrap";
import {AiTwotoneLike} from "react-icons/ai";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import "./Home.css";
const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch(
      "https://flavor-adventure-server-side-m198b8wdx-zahara-rahmanchy.vercel.app/chefs"
    )
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
            <Card className="my-3 w-75 mx-auto rounded-4 p-3" key={d.chef_id}>
              <img src={d.chef_picture} className="rounded-3 mb-3" />
              <Card.Body
                style={{backgroundColor: "#e8cccc"}}
                className="rounded-1"
              >
                <Card.Title className="bg-transparent ">
                  {d.chef_name}
                </Card.Title>
                <Card.Text className="d-md-flex bg-transparent">
                  <p className="text-black fs-6 flex-md-grow-1 bg-transparent">
                    Years of Experience:
                    <span className="ps-2 text-danger bg-transparent">
                      {d.years_of_experience} years
                    </span>
                  </p>
                  <p className="text-black fs-6 bg-transparent">
                    Number of Recipes:{" "}
                    <span className="text-danger bg-transparent">
                      {d.num_of_recipes} dishes{" "}
                    </span>
                  </p>
                </Card.Text>
                <div className="bg-transparent d-flex justify-content-between align-items-md-center flex-column-reverse flex-md-row">
                  <Link to={`/chefs/${d.chef_id}`}>
                    <Button
                      style={{backgroundColor: "#e35640", border: "none"}}
                    >
                      View Recipes
                    </Button>
                  </Link>
                  <p className="text-center bg-transparent">
                    <AiTwotoneLike className="text-primary fs-5 mx-1 text-center bg-transparent" />
                    <small className="text-black-50 fw-semibold bg-transparent">
                      {d.likes} Likes
                    </small>
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

{
  /* <Link to={`/chefs/${chef_id }`}><Button style={{backgroundColor: "#e35640", border: "none"}}>
                    View Recipes
                  </Button></Link> */
}
