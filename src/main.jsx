import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Root from "./Root/Root";
import Blog from "./Components/Blog";
import AuthProvider from "./Providers/AuthProvider";
import Recipes from "./Components/Recipes/Recipes";
import PrivateRoute from "./Providers/PrivateRoute";
import ErrorPage from "./Components/ErrorPage";
import {useState} from "react";
import Spinner from "react-bootstrap/Spinner";

// const loadChefs = async params => {
//   const [loading, setLoading] = useState(false);

//   try {
//     setLoading(true); // set loading state to true
//     const response = await fetch(
//       `https://flavor-adventure-server-side-m198b8wdx-zahara-rahmanchy.vercel.app/chefs/${[
//         params.id,
//       ]}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false); // set loading state to false
//   }
// };
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
          // <PrivateRoute>
          //   {loading ? <Spinner animation="border" /> : <Recipes />}
          // </PrivateRoute>
        ),
        // loader: ({params}) => loadChefs(params),
        loader: ({params, request}) =>
          fetch(
            `https://flavor-adventure-server-side-m198b8wdx-zahara-rahmanchy.vercel.app/chefs/${[
              params.id,
            ]}`
          ),
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
