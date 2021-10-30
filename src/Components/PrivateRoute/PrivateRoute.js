import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  const {currentUser, loading} = useAuth();
  if(loading){
    return <Spinner animation="border" variant="danger" />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
      currentUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
