import React, {useState} from "react";
import {Col, Container, Row, Button, Card, Table} from "react-bootstrap";
import {BsSuitHeartFill} from "react-icons/bs";
import {ToastContainer, toast} from "react-toastify";
import {Rating} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = props => {
  const {ingredients, cooking_method, recipe_image, rating, recipe_name} =
    props.recipe;
  const [click, setClick] = useState(false);

  const handleFavourite = () => {
    // toast("Wow so easy!");
    toast.error("Added to Favourites!", {
      icon: false,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setClick(true);
  };
  return (
    <>
      <h2 className="mt-3 fw-normal text-center">{recipe_name}</h2>
      <Col className="text-center p-4 m-2">
        <Table responsive>
          <tbody>
            <tr>
              <th className="bg-white" colSpan={3}>
                Ingredients
              </th>
              {ingredients.map((ingredient, index) => (
                <td style={{background: "#FF7B74", color: "white"}} key={index}>
                  {ingredient}
                </td>
              ))}
            </tr>

            <tr>
              <th colSpan={3} className="bg-white">
                Cooking Method
              </th>
              <td colSpan={5} style={{background: "#FF7B74", color: "white"}}>
                {cooking_method}
              </td>
            </tr>

            <tr>
              <th colSpan={3} className="bg-white">
                Ratings
              </th>
              <td colSpan={6} style={{background: "#FF7B74", color: "white"}}>
                <div className="d-flex align-items-center justify-content center">
                  <Rating
                    style={{maxWidth: 200}}
                    value={rating}
                    readOnly
                    className="flex-grow-1"
                  />
                  {rating} stars
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button
          className="d-flex float-end text-white flex-column rounded border-0"
          style={{background: "#F4716A", width: "100px"}}
          onClick={handleFavourite}
          disabled={click}
        >
          <BsSuitHeartFill className="mt-2 fs-3 mx-auto text-white" />
          <p className="m-0 p-0">Add to Favourites</p>
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        ;
      </Col>
      <Col sm={6}>
        <Card className="bg-transparent border-0">
          {recipe_image && (
            <Card.Img
              variant="top"
              src={recipe_image}
              className="p-4 bg-transparent"
            />
          )}
        </Card>
      </Col>
    </>
  );
};

export default RecipeCard;
