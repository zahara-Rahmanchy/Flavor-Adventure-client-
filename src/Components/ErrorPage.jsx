import React from "react";
import {Link} from "react-router-dom";
import {useRouteError} from "react-router-dom";
const ErrorPAge = () => {
  const {error, status, statusText} = useRouteError();
  console.error(error);
  return (
    <div className="container mx-auto w-75 text-center d-flex align-items-center flex-column py-2 mt-5">
      <h5>Oops!</h5>
      <p>Sorry, an unexpected error has occurred.</p>
      <img
        src="https://img.freepik.com/premium-vector/illustration-error-message-face-connection-alert-stop_755976-2.jpg?w=740"
        style={{height: "300px", width: "350px"}}
      ></img>
      <h2 className="text-8xl font-bold text-danger">
        <span className="sr-only">Error</span> {status || "Unknown"}
        <p>{statusText || ""}</p>
      </h2>

      <p className="font-bold fst-italic text-red-400 bg-dark p-2 rounded-1 text-info">
        {error?.message}
      </p>

      <button className="bg-danger rounded border-0 px-5 py-2">
        <Link to="/" className="text-decoration-none text-white">
          Go Back
        </Link>
      </button>
    </div>
  );
};

export default ErrorPAge;
