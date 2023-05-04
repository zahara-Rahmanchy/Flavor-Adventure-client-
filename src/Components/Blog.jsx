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
          x={0.1}
          // y={0.6}
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
      <Container
        ref={ref}
        className="mt-5 py-5 px-3 mx-auto  w-75  rounded-2 bg-danger bg-opacity-10"
      >
        <div>
          <h3>
            a) Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p>
            Un-controlled components refers to those that manage their own state
            internally.Here DOM only has access on the data and values cannot be{" "}
            <br />
            accessed by props, react ref is used which refers directly to the
            DOM. It is difficult to use for validation and provides less control
            over form
            <br /> <br />
            Whereas Controlled components are those that are controlled by the
            parents, their state and behaivour changes when changed by the
            parents. <br />
            It cannot maintain its internal state by itself and the values can
            be accessed using props.It also provides control over validation and
            better control over data.
          </p>
        </div>
        <div>
          <h3>b) How to validate React props using PropTypes?</h3>
          <p>
            Proptypes in react is used to check the type of props that is sent
            <br />
            It can be validated using the prop-types package of react where the
            propType has key, value pair where key is the name of prop and value
            is type of the prop. <br />
            <br />
            1. PropTypes.any: The prop can be of any data type <br />
            <br />
            2. PropTypes.array: For prop to be an array
            <br />
            <br />
            3. PropTypes.object: For prop to be an an object
            <br /> <br />
            4. PropTypes.symbol:For prop to be ana symbol
            <br />
            <br />
            5. PropTypes.bool: For prop to be anBoolean
            <br />
            <br />
            6. PropTypes.number:For prop to be ana number
            <br />
            <br />
            7. PropTypes.string:For prop to be ana string
            <br />
            <br />
            8. PropTypes.func: For prop to be anfunction
            <br />
          </p>
        </div>
        <div>
          <h3>c) Tell us the difference between nodejs and express js.</h3>
          <p>
            {" "}
            Node js is a runtime environment that excutes javaScript code
            outside of the brower. It is not a framework.It is build on V8
            engine and provides less features.
            <br /> <br />
            Express Js is a node js framework that eases the functionality of
            the node js and provides new and more features with middlewares and
            rounting
            <br />
            It is built on node js. It doesn't have middlewares or routing Takes
            more time to code
          </p>
        </div>
        <div>
          <h3>
            d) What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>
            Custom hooks are built using the keyword 'use'and they are
            javaScript fucntions. These custom hooks are created when we want to
            use a unique
            <br /> feature several times,hence they are created so that we can
            reuse the functionality whenever needed
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default Blog;
