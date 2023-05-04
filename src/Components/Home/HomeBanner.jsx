import React from "react";
import "./Home.css";
const HomeBanner = () => {
  return (
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeBanner;
