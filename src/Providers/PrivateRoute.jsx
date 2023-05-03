import React, {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user} = useContext(AuthContext);
  //   to get the current location that we want to visit
  const location = useLocation();
  console.log(location);

  if (user) {
    return children;
  }
  return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;
