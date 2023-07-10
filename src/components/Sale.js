import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Data from "../data.json";

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
          backgroundColor: "teal",
          opacity: "0.5",
          margin: "10px 10px",
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            display: "flex",
            width: "96%",
            minHeight: "400px",
            minWidth: "500px",
            height: "100px",
            margin: "20px",
          }}
        >
          <div>
            <img src={itemData[0].userName + itemData[0].id + ".jpg"} />
          </div>
          <div>
            <div style={{ color: "white" }}>{itemData[0].title}</div>
            <div>{itemData[0].category}</div>
            <div>{itemData[0].userName}</div>
            <div>{itemData[0].description}</div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "red",
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
