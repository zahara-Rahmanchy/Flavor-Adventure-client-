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

  //  src="https://img.freepik.com/free-photo/hand-holding-spoon-nacho-near-mexican-food_23-2148181554.jpg?w=996&t=st=1683132865~exp=1683133465~hmac=72b1ae6cb4165a0e5ae75ad250ef20337dc671da586125a79463bfee99f4283e"
  // src="https://img.freepik.com/free-photo/mexican-kitchen_23-2147640325.jpg?w=996&t=st=1683132771~exp=1683133371~hmac=7144d3782196a89301d85450d28eb98bc0bb16825e2c567a8b81d2693b186531"

  return (
    <Container>
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item rounded-2">
            <img
              src="https://img.freepik.com/free-photo/hand-holding-spoon-nacho-near-mexican-food_23-2148181554.jpg?w=996&t=st=1683132865~exp=1683133465~hmac=72b1ae6cb4165a0e5ae75ad250ef20337dc671da586125a79463bfee99f4283e"
              className="d-block w-100 c-img rounded-2"
              alt="..."
            />
            <div className="carousel-caption top-0 d-none d-md-block mt-5">
              <h2 className="mt-5 display-5 fw-bold text-light">
                Discover the Rich and Authentic Taste of Mexico:
              </h2>
              <p
                className="fs-5 mt-5 fst-italic fw-semibold "
                style={{color: "yellow"}}
              >
                Meet Our Talented Chefs and Explore Their Best Recipes!
              </p>
            </div>
          </div>
          <div className="carousel-item c-item rounded-2">
            <img
              src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption top-0 d-none d-md-block mt-5">
              <h2 className="mt-5 display-5 fw-bold text-light">
                Discover the Rich and Authentic Taste of Mexico:
              </h2>
              <p
                className="fs-5 mt-5 fst-italic fw-semibold "
                style={{color: "yellow"}}
              >
                Meet Our Talented Chefs and Explore Their Best Recipes!
              </p>
            </div>
          </div>
          <div className="carousel-item c-item rounded-2">
            <img
              src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption top-0 d-none d-md-block mt-5">
              <h2 className="mt-5 display-5 fw-bold text-light">
                Discover the Rich and Authentic Taste of Mexico:
              </h2>
              <p
                className="fs-5 mt-5 fst-italic fw-semibold "
                style={{color: "yellow"}}
              >
                Meet Our Talented Chefs and Explore Their Best Recipes!
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner top-0">
          <div className="top-0 carousel-item active c-item">
            <img
              src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption  d-md-block top-0">
              <h2 className="mt-5 display-5 fw-bold text-light">
                Discover the Rich and Authentic Taste of Mexico:
              </h2>
              <p
                className="fs-md-5 fs-6 fst-italic fw-semibold "
                style={{color: "yellow"}}
              >
                Meet Our Talented Chefs and Explore Their Best Recipes!
              </p>
            </div>
          </div>
          <div className="carousel-item top-0 c-item">
            <img
              src="https://img.freepik.com/free-photo/hand-holding-spoon-nacho-near-mexican-food_23-2148181554.jpg?w=996&t=st=1683132865~exp=1683133465~hmac=72b1ae6cb4165a0e5ae75ad250ef20337dc671da586125a79463bfee99f4283e"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption  d-md-block top-0">
              {/* <h4 className="mt-5 display-md-5 display-6 fw-bold text-light">
                Take a Journey Through Mexico's Diverse Culinary Landscape: From
              </h4> */}
              <br />
              <br /> <br />
              <h4
                className=" text-center mt-5 fst-italic fw-semibold "
                style={{color: "yellow"}}
              >
                From Tacos to Tamales, Our Chefs' Specialties Will <br />{" "}
                Transport Your Taste Buds to the <br /> Heart of Mexico!
              </h4>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="https://img.freepik.com/free-vector/sketch-mexican-food-objects-set_1284-40716.jpg?w=740&t=st=1683140277~exp=1683140877~hmac=48754520541d76f9709710c63a0590fa966683a3a3c14a267e8e3db87ece8b8f"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div className="carousel-caption top-0 d-md-block">
              <br /> <br />
              <br />
              <h4
                className="fs-1 text-center mt-5 fst-italic fw-semibold "
                style={{color: "yellow"}}
              >
                Explore and Enjoy!{" "}
              </h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
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
