import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center spinner">
        <Spinner animation="border" variant="danger" />
      </div>
    );
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
