import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const NavBar = () => {
  const searchData = [
    { title: "Sneakers", url: "sneakers.jpg" },
    { title: "Trading Cards", url: "TradingCards.png" },
    { title: "Toys", url: "toys.jpg" },
    { title: "Funiture", url: "chair.jpg" },
    { title: "Retro Games", url: "retroGames.jpg" },
    { title: "Old Clothes", url: "oldClothes.jpg" },
    { title: "Streetwear", url: "streetwear.jpg" },
    { title: "Brands", url: "brand.jpg" },
    { title: "figurines", url: "figurine.jpg" },
    { title: "anime", url: "anime.jpg" },
    { title: "Plants", url: "plant.jpg" },
  ];
  const [search, setSearch] = useState(false);
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
              onBlur={() => setSearch(false)}
            />
            <Dropdown show={search}>
              <Dropdown.Menu style={{ width: "100%" }}>
                {/* <Dropdown.Item>{
                    searchData.map((catagory) => {
                        return (
                            
                        )
                    })
                    }</Dropdown.Item> */}
                <Dropdown.Item>HELLO ADAM</Dropdown.Item>
                <Dropdown.Item>BOOOO</Dropdown.Item>
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
