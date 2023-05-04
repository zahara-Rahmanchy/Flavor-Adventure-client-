import React from "react";
import {Container, Button, Form, Row, Col, Card} from "react-bootstrap";
import {FaFeather} from "react-icons/fa";
import {AiOutlineDownload} from "react-icons/ai";
import Pdf from "react-to-pdf";
const Blog = () => {
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
  };
  return (
    <Container>
      <Container
        style={{background: "#F4EDED"}}
        className="text-center py-5 px-3 mx-auto  w-100  rounded-2"
      >
        <h3 className="fst-italic fw-sembold" style={{color: "#e35640"}}>
          Blogs <FaFeather />
        </h3>
        <h4 className="my-3">Click to Download as pdf</h4>
        <Pdf
          targetRef={ref}
          options={options}
          x={0.6}
          y={0.6}
          filename="blog.pdf"
        >
          {({toPdf}) => (
            <button
              onClick={toPdf}
              style={{backgroundColor: "#e35640"}}
              className="p-3 w-25 border-0 rounded-pill fs-3 fw-semibold text-white text-center"
            >
              PDF
              <AiOutlineDownload className=" ms-1" />
            </button>
          )}
        </Pdf>
      </Container>
      <Container ref={ref}>
        <h3>
          Tell us the differences between uncontrolled and controlled
          components.
        </h3>
        <h3>
          How to validate React props using PropTypes Tell us the difference
        </h3>
        <h3>
          between nodejs and express js. What is a custom hook, and why will you
        </h3>
        <h3>create a custom hook?</h3>
      </Container>
    </Container>
  );
};

export default Blog;
