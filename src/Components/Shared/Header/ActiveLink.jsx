import React, {Children} from "react";
import {NavLink} from "react-router-dom";

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        isActive
          ? "bg-danger text-white bg-opacity-75 text-decoration-none me-5 fs-5 fw-semibold rounded p-1"
          : "text-decoration-none me-5 text-black fs-6 fw-semibold bg-transparent p-1"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
