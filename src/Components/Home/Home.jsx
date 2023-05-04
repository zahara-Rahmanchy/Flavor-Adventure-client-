import React, {useEffect, useState} from "react";
import {Container, Button, Form, Row, Col, Card} from "react-bootstrap";
import {FaFeather} from "react-icons/fa";
import {AiTwotoneLike} from "react-icons/ai";

import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LazyLoad from "react-lazy-load";

import "./Home.css";
import HomeBanner from "./HomeBanner";
import {BsCloudHaze2} from "react-icons/bs";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    fetch(
      "https://flavor-adventure-server-side-m198b8wdx-zahara-rahmanchy.vercel.app/chefs"
    )
      .then(res => res.json())
      .then(data => {
        setChefs(data);
        setSpinner(false);
      })
      .catch(error => {
        error;
        // console.log(error);
      });
  }, []);

  return (
    <Container>
      {spinner && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-danger text-center mx-auto"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <HomeBanner />
      <Row>
        <Col>
          <h4 className="text-center fst-italic mt-5 mb-3">Our Chefs</h4>
          {chefs.map(d => (
            <Card className="my-3 w-75 mx-auto rounded-4 p-3" key={d.chef_id}>
              <LazyLoadImage
                alt={""}
                effect="blur"
                src={d.chef_picture}
                width="100%"
                heigh="100%"
                placeholderSrc={<BsCloudHaze2></BsCloudHaze2>}
              />
              <Card.Body
                style={{backgroundColor: "#e8cccc"}}
                className="rounded-1"
              >
                <Card.Title className="bg-transparent ">
                  {d.chef_name}
                </Card.Title>
                <div className="d-md-flex bg-transparent">
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
                </div>

                <div className="bg-transparent d-flex justify-content-md-between align-items-md-center flex-column-reverse flex-md-row">
                  <Link to={`/chefs/${d.chef_id}`}>
                    <Button
                      style={{backgroundColor: "#e35640", border: "none"}}
                    >
                      View Recipes
                    </Button>
                  </Link>
                  <p className="bg-transparent">
                    <AiTwotoneLike className="text-primary fs-5 mx-md-1 text-center bg-transparent ms-0" />
                    <small className="text-black fw-semibold bg-transparent">
                      {d.likes} Likes
                    </small>
                  </p>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      <h3 className="text-center fst-italic mt-5 mb-5 ">
        Our Chef's Special Cuisines
      </h3>

      {/* first extra section: Special recipes of each chef */}
      <Row className="gy-md-4">
        <Col sm={2}>
          <Card>
            <Card.Body style={{backgroundColor: "#d8abab"}}>
              <Card.Subtitle className="fst-italic text-white text-center">
                Tacos al Pastor
              </Card.Subtitle>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="https://plus.unsplash.com/premium_photo-1681406994990-e16f7e02e027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              style={{height: "150px"}}
            />
          </Card>
        </Col>
        <Col sm={2}>
          <Card>
            <Card.Body style={{backgroundColor: "#d8abab"}}>
              <Card.Subtitle className="fst-italic text-white text-center">
                Gaucamole
              </Card.Subtitle>
            </Card.Body>
            <Card.Img
              style={{height: "150px"}}
              variant="bottom"
              src="https://plus.unsplash.com/premium_photo-1681406689566-ff55b3970c07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </Card>
        </Col>
        <Col sm={2}>
          <Card>
            <Card.Body style={{backgroundColor: "#d8abab"}}>
              <Card.Subtitle className="fst-italic text-white  text-center">
                Thamles
              </Card.Subtitle>
            </Card.Body>
            <Card.Img
              style={{height: "150px"}}
              variant="bottom"
              src="https://images.unsplash.com/photo-1552332386-1634d96809cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
          </Card>
        </Col>
        <Col sm={2}>
          <Card>
            <Card.Body style={{backgroundColor: "#d8abab"}}>
              <Card.Subtitle className="fst-italic text-white text-center">
                Chille Rellenos
              </Card.Subtitle>
            </Card.Body>
            <Card.Img
              style={{height: "150px"}}
              variant="bottom"
              src="https://www.seriouseats.com/thmb/w7VN_qvgJ7Rx8O-fLTT-6XlxaTE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__20160422-chiles-rellenos-27-1be34192fc8c475da5c50b45e1c5f0b4.jpg"
            />{" "}
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Body style={{backgroundColor: "#d8abab"}}>
              <Card.Subtitle className="fst-italic text-white  text-center">
                Tacos al Pastor
              </Card.Subtitle>
            </Card.Body>
            <Card.Img
              style={{height: "150px"}}
              variant="bottom"
              src="https://braise.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/249074755_1078356962702101_3269967513558744230_nlow.jpg"
            />
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Body style={{backgroundColor: "#d8abab"}}>
              <Card.Subtitle className="fst-italic text-white text-center">
                Soup
              </Card.Subtitle>
            </Card.Body>
            <Card.Img
              style={{height: "150px"}}
              variant="bottom"
              src="https://braise.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/249251194_621316295540632_278880413814601942_nlow.jpg"
            />
          </Card>
        </Col>
      </Row>
      {/* second section */}
      <p className="fst-italic text-center fs-5 my-5">
        Share Your Meals on Instagram & <br />
        We Will Reward the Meal of the Month!
      </p>
      <Container
        style={{background: "#F4EDED"}}
        className="text-center p-5 w-md-100 w-75"
      >
        <h3 className="fst-italic fw-sembold" style={{color: "#e35640"}}>
          OUR NEWSLETTER <FaFeather />
        </h3>
        <h4 className="my-5">
          Subscribe to our newsletter & keep up with our <br />
          latest recipes and organized workshops.
        </h4>
        <input
          type="text"
          placeholder="Enter your email address here "
          className="border-bottom-1 border-end-0 border-start-0 border-top-0 mb-5 bg-transparent w-75"
        />
        <FaFeather style={{color: "#e35640"}} />
      </Container>
    </Container>
  );
};

export default Home;

{
  /* <Link to={`/chefs/${chef_id }`}><Button style={{backgroundColor: "#e35640", border: "none"}}>
                    View Recipes
                  </Button></Link> */
}
