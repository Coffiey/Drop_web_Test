import { useState, useRef, useEffect } from "react";
import Data from "../data.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Homepage = () => {
  const { searchData, userData, itemData } = Data;
  const containerRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100;
    }
  };
  const firstscrollLeft = () => {
    if (firstRef.current) {
      firstRef.current.scrollLeft -= 100;
    }
  };
  const secondscrollLeft = () => {
    if (secondRef.current) {
      secondRef.current.scrollLeft -= 100;
    }
  };
  const thirdscrollLeft = () => {
    if (thirdRef.current) {
      thirdRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100;
    }
  };
  const firstscrollRight = () => {
    console.log(firstRef.current);
    if (firstRef.current) {
      firstRef.current.scrollLeft += 100;
    }
  };
  const secondscrollRight = () => {
    if (secondRef.current) {
      secondRef.current.scrollLeft += 100;
    }
  };
  const thirdscrollRight = () => {
    if (thirdRef.current) {
      thirdRef.current.scrollLeft += 100;
    }
  };

  return (
    <>
      <div>
        <div>
          <p>See Who's Live</p>
        </div>
        <div className='liveContainer'>
          <div
            className='liveButton'
            onClick={scrollLeft}
          >
            {"<"}
          </div>
          <div
            className='liveDiv'
            ref={containerRef}
          >
            {userData.map((user) => {
              return (
                <Card
                  style={{
                    margin: "10px",
                    minWidth: "200px",
                    backgroundImage: `url(${user.userName + ".jpg"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                  }}
                >
                  <Card.Title
                    style={{
                      color: "white",
                    }}
                  >
                    <span style={{ fontSize: "0.7em" }}>
                      {user.live ? "🟢" : "🔴"}
                    </span>{" "}
                    {user.userName}
                  </Card.Title>
                  <Card.Body></Card.Body>
                </Card>
              );
            })}
          </div>
          <div
            className='liveButton'
            onClick={scrollRight}
          >
            {">"}
          </div>
        </div>
      </div>
      {/* first Carousel */}
      <div className='itemContainer'>
        <div
          className='liveButton'
          onClick={firstscrollLeft}
        >
          {"<"}
        </div>
        <div
          className='itemDiv'
          ref={firstRef}
        >
          {itemData
            .filter((item, index) => index < 10)
            .map((item, index) => {
              return (
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id='button-tooltip-2'>{item.description}</Tooltip>
                  }
                >
                  <Card
                    style={{
                      margin: "10px",
                      minWidth: "200px",
                      borderRadius: "20px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        // minWidth: "150px",
                        minHeight: "150px",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                      }}
                    >
                      <Card.Img
                        variant='top'
                        style={{
                          margin: "auto",
                          //   maxWidth: "100%",
                          maxHeight: "99%",
                        }}
                        src={item.userName + item.id + ".jpg"}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1em" }}>
                        {item.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              );
            })}
        </div>
        <div
          className='liveButton'
          onClick={firstscrollRight}
        >
          {">"}
        </div>
      </div>
      {/* Second Carousel */}
      <div className='itemContainer'>
        <div
          className='liveButton'
          onClick={secondscrollLeft}
        >
          {"<"}
        </div>
        <div
          className='itemDiv'
          ref={secondRef}
        >
          {itemData
            .filter((item, index) => {
              if (index < 20 && index > 10) {
                return true;
              }
            })
            .map((item, index) => {
              return (
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id='button-tooltip-2'>{item.description}</Tooltip>
                  }
                >
                  <Card
                    style={{
                      margin: "10px",
                      minWidth: "200px",
                      borderRadius: "20px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        // minWidth: "150px",
                        minHeight: "150px",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                      }}
                    >
                      <Card.Img
                        variant='top'
                        style={{
                          margin: "auto",
                          //   maxWidth: "100%",
                          maxHeight: "99%",
                        }}
                        src={item.userName + item.id + ".jpg"}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1em" }}>
                        {item.title}
                        {"/n"}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              );
            })}
        </div>
        <div
          className='liveButton'
          onClick={secondscrollRight}
        >
          {">"}
        </div>
      </div>
      <div className='itemContainer'>
        <div
          className='liveButton'
          onClick={thirdscrollLeft}
        >
          {"<"}
        </div>
        <div
          className='itemDiv'
          ref={thirdRef}
        >
          {itemData
            .filter((item, index) => index > 20)
            .map((item, index) => {
              return (
                <OverlayTrigger
                  placement='top'
                  overlay={
                    <Tooltip id='button-tooltip-2'>{item.description}</Tooltip>
                  }
                >
                  <Card
                    style={{
                      margin: "10px",
                      minWidth: "200px",
                      borderRadius: "20px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        // minWidth: "150px",
                        minHeight: "150px",
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                      }}
                    >
                      <Card.Img
                        variant='top'
                        style={{
                          margin: "auto",
                          //   maxWidth: "100%",
                          maxHeight: "99%",
                        }}
                        src={item.userName + item.id + ".jpg"}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1em" }}>
                        {item.title}
                        {"/n"}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              );
            })}
        </div>
        <div
          className='liveButton'
          onClick={thirdscrollRight}
        >
          {">"}
        </div>
      </div>
    </>
  );
};

export default Homepage;
