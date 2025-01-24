
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FiSearch } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/Context';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const { state: { cart } } = CartContext();

  return (
    <Navbar  variant="dark" expand="lg" className="py-3" id="n">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold fs-4">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto fs-5">
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/about">About Us</Nav.Link>
            <Nav.Link className="text-white" href="/contact">Contact Us</Nav.Link>
            <Nav.Link className="text-white" href="/card">Card</Nav.Link>
          </Nav>
        
          <div className="d-none d-md-flex align-items-center search-container">
            <input
              className="form-control me-2 search-input"
              type="text"
              placeholder="Search Ads, Cars, Mobile Phones, and More..."
            />
            <Button variant="light" className="search-btn">
              <FiSearch />
            </Button>
          </div>
          <Dropdown as={ButtonGroup} className="ms-3">
            <Button variant="light">
              <Nav.Link className="text-dark" href="/card">
                <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}
              </Nav.Link>
            </Button>
            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
            <Dropdown.Menu>
              {cart.length > 0 ? (
                <>
                  {cart.map((item, index) => (
                    <div className="dropdown-item d-flex align-items-center" key={index}>
                      <img src={item.image} alt="cart-item" className="cart-item-img me-2" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                  <Link to="/card">
                    <Button variant="primary" className="mt-2 w-100">
                      Show Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span className="dropdown-item">Cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
