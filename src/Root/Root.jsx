import React from "react";
import {Outlet, useNavigation} from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";
const Root = () => {
  const navigation = useNavigation();
  // console.log(navigation.state);
  return (
    <div>
      <Header></Header>
      <div className="d-flex justify-content-center">
        {navigation.state === "loading" && (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border text-danger text-center mx-auto"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
