import React from "react";
import {Col, Container, Row, Image, Card, Table} from "react-bootstrap";
const RecipeCard = props => {
  const {ingredients, cooking_method, recipe_image, rating, recipe_name} =
    props.recipe;
  console.log(recipe_image);
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
              {ingredients.map(i => (
                <td style={{background: "#FF7B74", color: "white"}}>{i}</td>
              ))}
            </tr>
            <br />
            <tr>
              <th colSpan={3} className="bg-white">
                Cooking Method
              </th>
              <td colSpan={5} style={{background: "#FF7B74", color: "white"}}>
                {cooking_method}
              </td>
            </tr>
            <br />
            <tr>
              <th colSpan={3} className="bg-white">
                Ratings
              </th>
              <td colSpan={6} style={{background: "#FF7B74", color: "white"}}>
                {rating}
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col>
        <Card className="bg-transparent border-0"></Card>
        {recipe_image && (
          <Card.Img
            variant="top"
            src={recipe_image}
            className="p-4 bg-transparent"
          />
        )}
      </Col>
    </>
  );
};

export default RecipeCard;
