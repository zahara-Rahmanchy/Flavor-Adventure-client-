import React, {Children} from "react";
import {NavLink} from "react-router-dom";

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        isActive
          ? "text-danger text-decoration-none me-5 fs-6 fw-semibold bg-transparent"
          : "text-decoration-none me-5 text-black fs-6 fw-semibold bg-transparent"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
