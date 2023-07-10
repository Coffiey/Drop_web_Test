import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Data from "../data.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Sales = () => {
  const { searchData, userData, itemData } = Data;
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const currentDate = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  console.log(itemData);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "850px",
          margin: "10px 10px",
          backgroundColor: "black",
          borderRadius: "25px",
        }}
      >
        <div
          style={{
            height: "3%",
            backgroundColor: "#1b6081",
            margin: "15px 15px 0px 15px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div style={{}}>{formattedDate}</div>
          <div
            style={{
              backgroundColor: "Black",
              width: "35%",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          ></div>
          <div style={{}}>{currentTime}</div>
        </div>
        <video
          autoplay
          muted
          controls
          style={{
            height: "95%",
            padding: "0px 15px 25px 15px",
          }}
        >
          <source
            src='stock.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div
        style={{
          width: "70%",
          minWidth: "500px",
          //   backgroundColor: "teal",
          opacity: "0.5",
          margin: "10px 10px",
        }}
      >
        <div
          style={{
            boxShadow: " 0px 2px 4px rgba(0, 0, 0, 1)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "96%",
            minHeight: "400px",
            minWidth: "500px",
            height: "100px",
            margin: "20px",
          }}
        >
          <div
            style={{
              marginLeft: "10px",
              backgroundColor: "white",
              border: "2px solid black",
              display: "flex",
              justifyContent: "center",
              width: "350px",
              height: "350px",
              background: `url(${
                itemData[0].userName + itemData[0].id + ".jpg"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
          <div>
            <Card
              style={{ width: "18rem", height: "350px", marginRight: "30px" }}
            >
              <Card.Body>
                <Card.Title>{itemData[0].title}</Card.Title>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>
                  <img
                    src={itemData[0].category + ".jpg"}
                    style={{
                      borderRadius: "50%",
                      height: "1.5em",
                    }}
                  />
                  {"  "}
                  {itemData[0].category}
                </ListGroup.Item>
                <ListGroup.Item>User: {itemData[0].userName}</ListGroup.Item>
              </ListGroup>
              <Card.Text>{itemData[0].description}</Card.Text>
              <Card.Body></Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "18rem",
                height: "350px",
                marginLeft: "auto",
                marginRight: "20px",
              }}
            >
              <Card.Body>
                <Card.Title>Current Bid</Card.Title>
                <Card.Title>
                  ¥{Math.floor(Math.random() * 9000) + 1000}
                </Card.Title>
                <Card.Text>You have 45 seconds to bid</Card.Text>
                <Button variant='primary'>Place Bid</Button>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>Reserve had been met</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link>Shipping to be arranged</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div
          style={{
            boxShadow: " 0px 2px 4px rgba(0, 0, 0, 1)",
            width: "96%",
            minWidth: "500px",
            margin: "20px",
            minHeight: "400px",
          }}
        >
          <InputGroup.Text
            style={{
              minHeight: "400px",
              borderRadius: "0px",
              alignItems: "top",
            }}
          >
            Chat
          </InputGroup.Text>
          <InputGroup className='mb-3'>
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
            <Button
              variant='secondary'
              id='button-addon2'
            >
              Message
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Sales;
