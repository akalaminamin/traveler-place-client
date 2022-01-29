import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import logo from "../../Assest/image/logo.png";
import "../Login/Login.css";
import { Form, Alert } from "react-bootstrap";

const Register = () => {
  const { setCurrentUser, signInWithgoogle, signup } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const handleGoogleSignIn = () => {
    signInWithgoogle()
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        history.push(redirect_uri);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/")
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }
  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login d-flex align-items-center justify-content-center border border-primary flex-column">
        <img src={logo} alt="" className="mb-5" />
        <h4 className="mb-4 fw-bold text-uppercase">Register</h4>
        <Form className="w-75" onSubmit={handleSubmit}>
          <Form.Control
            className="my-3 w-full"
            size="sm"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Control
            className="my-3 w-full"
            size="sm"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="my-3 w-full"
            size="sm"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control
            className="my-3 w-full"
            size="sm"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Form.Control
            className="my-3 w-full btn btn-primary"
            size="sm"
            type="submit"
            disabled={loading}
            value="Register"
          />
        </Form>
        {error ? <Alert variant="danger">{error}</Alert> : null}
        <h4 className="mb-2">Or</h4>
        <button className="google-btn btn mb-3" onClick={handleGoogleSignIn}>
          <FcGoogle className="google-icon" />
        </button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
