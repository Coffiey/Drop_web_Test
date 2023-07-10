import { useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Data from "../data.json";

const NavBar = () => {
  const { searchData, userData, itemData } = Data;
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userList, setUserList] = useState(userData);
  const containerRef = useRef(null);

  useEffect(() => {
    if (searchValue.length > 0) {
      let newUserList = userList.filter((user) => {
        if (
          user.userName
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()) ||
          user.description
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      setUserList(newUserList);
    } else {
      setUserList(userData);
    }
  }, [searchValue]);

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
        <div
          className='search_container'
          tabindex='-1'
          onFocus={() => setSearch(true)}
          onBlur={() => setSearch(false)}
        >
          <InputGroup className='search_group'>
            <Form.Control
              placeholder='Search'
              className='search_input'
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
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
                  <div
                    className='scroll_button'
                    onClick={scrollLeft}
                  >
                    {"<"}
                  </div>
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
                          key={catagory.title}
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
                  <div
                    className='scroll_button'
                    onClick={scrollRight}
                  >
                    {">"}
                  </div>
                </Dropdown.Header>
                <Dropdown.Divider />
                <div
                  style={{
                    display: "flex",
                    margin: "10px",
                    flexFlow: "row wrap",
                    justifyContent: "space-around",
                  }}
                >
                  {userList
                    .filter((user) => user.live)
                    .map((user) => {
                      return (
                        <Card
                          style={{
                            width: "45%",
                            display: "flex",
                            margin: "10px 0px",
                            backgroundColor: "rgb(226, 244, 223)",
                            border: "none",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <Card.Img
                            style={{
                              height: "2rem",
                              width: "2rem",
                              margin: "3px 7px",
                            }}
                            src='live.png'
                          />
                          <Card.Img
                            variant='top'
                            style={{
                              width: "45%",
                              margin: "15px auto",
                              borderRadius: "50%",
                              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                              aspectRatio: "1/1",
                              objectFit: "cover",
                            }}
                            src={user.userName + ".jpg"}
                          />
                          <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>
                              {user.userName}
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center" }}>
                              {user.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
                <Dropdown.Divider />
                <div
                  style={{
                    display: "flex",
                    margin: "10px",
                    flexFlow: "row wrap",
                    justifyContent: "space-around",
                  }}
                >
                  {userList
                    .filter((user) => !user.live)
                    .map((user) => {
                      return (
                        <Card
                          style={{
                            width: "45%",
                            display: "flex",
                            margin: "10px 0px",
                            backgroundColor: "rgb(245, 245, 245)",
                            border: "none",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <Card.Img
                            variant='top'
                            style={{
                              width: "45%",
                              margin: "15px auto",
                              borderRadius: "50%",
                              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                              aspectRatio: "1/1",
                              objectFit: "cover",
                            }}
                            src={user.userName + ".jpg"}
                          />
                          <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>
                              {user.userName}
                            </Card.Title>
                            <Card.Text style={{ textAlign: "center" }}>
                              {user.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
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
        </div>
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
