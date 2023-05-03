import React, {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  //   to get the current location that we want to visit
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Spinner animation="border" variant="danger" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;
