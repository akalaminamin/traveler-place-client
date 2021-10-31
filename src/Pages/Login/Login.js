import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import logo from '../../Assest/image/logo.png';
import "./Login.css";

const Login = () => {
  const { setCurrentUser, signInWithgoogle, setLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
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

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login d-flex align-items-center justify-content-center border border-primary flex-column">
        <img src={logo} alt=""  className="mb-5"/>
        <h4 className="mb-4 fw-bold">Login With</h4>
        <button className="google-btn btn mb-3" onClick={handleGoogleSignIn}>
          <FcGoogle className="google-icon" /> Sign In with google
        </button>
        <span>
          Don't have an account? <Link to="/login">Create an account?</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
