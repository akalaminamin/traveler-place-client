import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import logo from "../../Assest/image/logo.png";
import "./Login.css";
import { Form, Alert } from "react-bootstrap";

const Login = () => {
  const { setCurrentUser, signInWithgoogle, login } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { email, password } = user;
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError("Failed to login");
    }
  };
  console.log(email, password)
  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login d-flex align-items-center justify-content-center border border-primary flex-column">
        <img src={logo} alt="" className="mb-5" />
        <h4 className="mb-4 fw-bold text-uppercase">Login</h4>
        <Form className="w-75" onSubmit={handleSubmit}>
          <Form.Control
            type="email"
            className="my-3"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
          <Form.Control
            className="my-3 w-full btn btn-primary"
            size="sm"
            type="submit"
            value="Login"
            disabled={loading}
          />
        </Form>
        {error ? <Alert variant="danger">{error}</Alert> : null}
        <h4 className="mb-2">Or</h4>
        <button className="google-btn btn mb-3" onClick={handleGoogleSignIn}>
          <FcGoogle className="google-icon" />
        </button>
        <span>
          Don't have an account? <Link to="/register">Create an account?</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
