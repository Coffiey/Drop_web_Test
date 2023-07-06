import { useState, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Data from "../data.json";

const NavBar = () => {
  const { searchData } = Data;
  const [search, setSearch] = useState(false);
  const containerRef = useRef(null);
  console.log(Data);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 30; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 30; // Adjust the scroll amount as needed
    }
  };

  return (
    <>
      <Navbar
        expand='lg'
        className='nav'
      >
        <Container className='logo_container'>
          <img
            src='drop.png'
            className='logo'
          />
        </Container>
        <Container className='search_container'>
          <InputGroup className='search_group'>
            <Form.Control
              placeholder='Search'
              className='search_input'
              onFocus={() => setSearch(true)}
              //   onBlur={() => setSearch(false)}
            />
            <Dropdown show={search}>
              <Dropdown.Menu style={{ width: "100%" }}>
                <Dropdown.Header
                  className='scroll'
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    overflowX: "scroll",
                    padding: "5px 5px",
                  }}
                >
                  <button
                    className='scroll_button'
                    onClick={scrollLeft}
                  >
                    {"<"}
                  </button>
                  <div
                    ref={containerRef}
                    className='scroll'
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      overflowX: "scroll",
                    }}
                  >
                    {searchData.map((catagory) => {
                      return (
                        <Card
                          style={{
                            display: "flex",
                            Width: "max-content",
                            minWidth: "65px",
                            border: "none",
                            padding: "0px 1px",
                          }}
                        >
                          <Card.Img
                            variant='top'
                            style={{
                              width: "50px",
                              margin: "3px auto",
                              borderRadius: "50%",
                              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                              aspectRatio: "1/1",
                              objectFit: "cover",
                            }}
                            src={catagory.url}
                          />
                          <Card.Title
                            style={{
                              fontSize: "0.6rem",
                              textAlign: "center",
                              padding: "0px 1px",
                            }}
                          >
                            #{catagory.title}
                          </Card.Title>
                        </Card>
                      );
                    })}
                  </div>
                  <button
                    className='scroll_button'
                    onClick={scrollRight}
                  >
                    {">"}
                  </button>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item>HELLO ADAM</Dropdown.Item>
                <Dropdown.Item>BOOOO</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
            <InputGroup.Text
              id='basic-addon2'
              className='search_button'
            >
              <img
                src='icons8-search-48.png'
                className='search_img'
              />
            </InputGroup.Text>
          </InputGroup>
        </Container>
        <Container
          className='button_container'
          style={{ justifyContent: "flex-end" }}
        >
          <Button
            variant='light'
            className='nav_button'
            style={{ fontSize: "0.75rem", fontWeight: "bold" }}
          >
            Log In
          </Button>
          <Button
            variant='danger'
            className='nav_button'
            style={{ fontSize: "0.75rem", fontWeight: "bold" }}
          >
            Sign Up
          </Button>
          <img
            src='icons8-user-64.png'
            className='nav_user'
          />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
