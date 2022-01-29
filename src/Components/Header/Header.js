import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import logo from "../../Assest/image/logo.png";
import "./Header.css";

const Header = () => {
  const { currentUser, logOut } = useAuth();
  const [admin, setAdmin] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/admin").then((res) => {
      const userAdmin = res.data.find(
        (single) => single?.email === currentUser?.email
      );
      setAdmin(userAdmin);
    });
  }, []);
  return (
    <>
      <Navbar bg="light" expand="lg" className="custom-nav">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="headerNav" as={Link} to="/">
                Home
              </Nav.Link>
              {!currentUser?.email ? (
                <Nav.Link as={Link} to="/login" className="headerNav">
                  Login
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link className="headerNav" as={Link} to="/addservice">
                    Add Place
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myorder" className="headerNav">
                    My Posts
                  </Nav.Link>
                  <Nav.Link className="headerNav" as={Link} to="/manageorder">
                    Manage Posts
                  </Nav.Link>
                  <Nav.Link className="headerNav" as={Link} to="/admin">
                    Admin
                  </Nav.Link>
                  {!currentUser?.photoURL ? (
                    <h6 className="mx-2 mb-0 text-danger">
                      {currentUser.displayName}
                    </h6>
                  ) : (
                    <img
                      style={{ width: "50px" }}
                      className="login-img rounded-circle mx-3"
                      src={currentUser.photoURL}
                      alt="user photo"
                    />
                  )}
                  <Nav.Link
                    className="d-flex align-items-center headerNav"
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
