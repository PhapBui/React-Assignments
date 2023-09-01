import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import "./DefaultLayout.scss";
import RootModal from "../LiveChat/LiveChat.jsx";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {RootModal()}
      <Footer />
    </>
  );
};

export default DefaultLayout;
