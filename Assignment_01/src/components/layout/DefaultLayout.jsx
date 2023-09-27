import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Toplevel from "../toplevel/Toplevel";

import styles from "./DefaultLayout.module.css";

const DefaultLayout = () => {
  return (
    <div className={styles["wrapper"]}>
      <Toplevel />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
