import React, { Component } from "react";
import {
  Navbar,
  Dropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Image,
  Badge
} from "react-bootstrap";
import "../CSS/Navbar.css";
class navbar extends Component {
  render() {
    return (
      <>
        <Navbar
          bg="light"
          variant="light"
          className="justify-content-center nav1"
        >
          <div className=" d-flex">
            <Navbar.Brand href="#home">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                width="100"
                height="30"
              />
            </Navbar.Brand>
            <Nav.Link className=" mr-3 left">
              <span className="icon">
                <i class="fas fa-th fa-sm"></i>
              </span>
              <span className="categories">Categories</span>
            </Nav.Link>
            <Nav.Item className="">
              <Form inline>
                <div className="search-box1 ">
                  <input
                    className="search-txt "
                    type="text"
                    placeholder="Search"
                  />
                  <span className="search-btn">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
              </Form>
            </Nav.Item>
            <Nav.Link>
              <span className="categories">Tech on Udemy</span>
            </Nav.Link>
            <Nav.Link>
              <span className="categories">My Courses</span>
            </Nav.Link>
            <Nav.Link>
              <div>
                <span className="categories" style={{ color: "red" }}>
                  <i class="fa fa-heart-o fa-lg"></i>
                  <Badge className="notif" pill variant="danger">
                    9
                  </Badge>
                </span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <span className="categories">
                <i class="fa fa-shopping-cart fa-lg"></i>
              </span>
            </Nav.Link>
            <Nav.Link>
              <span className="categories">
                <i class="fa fa-bell-o fa-lg" aria-hidden="true"></i>
              </span>
            </Nav.Link>
            <Nav.Link>
              <Image
                src="./img/user.png"
                height="25px"
                width="25px"
                roundedCircle
              />
            </Nav.Link>
          </div>
        </Navbar>
      </>
    );
  }
}

export default navbar;
