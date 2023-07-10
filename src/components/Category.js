import Data from "../data.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { searchData, userData, itemData } = Data;
  const { category } = useParams();

  return (
    <>
      <h1>{category}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {itemData
          .filter((item) => item.category === category)
          .map((item) => {
            return (
              <Card style={{ width: "20rem", margin: "15px" }}>
                <div
                  style={{
                    background: `url(${item.userName + item.id + ".jpg"})`,
                    marginLeft: "10px",
                    border: "2px solid black",
                    width: "300px",
                    height: "300px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                ></div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroup.Item>{item.category}</ListGroup.Item>
                  <ListGroup.Item>
                    User:{" "}
                    <span style={{ fontWeight: "bold" }}>{item.userName}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant='primary'>Add to WatchList</Button>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default Category;
