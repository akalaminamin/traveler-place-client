import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const { currentUser, logOut } = useAuth();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Travel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/addservice">
                Add Service
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/placeorder">
                Place Order
              </Nav.Link> */}
              <Nav.Link as={Link} to="/manageorder">
                Manage Order
              </Nav.Link>
              {!currentUser?.email ? (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/myorder">
                    My order
                  </Nav.Link>
                  <h6 className="mx-2 mb-0">{currentUser.displayName}</h6>
                  <img
                    style={{ width: "50px" }}
                    className="login-img rounded-circle mx-3"
                    src={currentUser.photoURL}
                    alt="user photo"
                  />
                  <Nav.Link
                    className="d-flex align-items-center"
                    as={Link}
                    to="/login"
                    onClick={logOut}
                  >
                    <FiLogOut />
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
