import React from "react";
import Container from "react-bootstrap/esm/Container.js";
import { images } from "../../assets/img";

import "./AuthLayout.scss";

const AuthLayout = ({ children }) => {
  return (
    <Container
      as="main"
      fluid
      style={{
        backgroundImage: `url(${images.banner})`,
        minHeight: "100vh",
      }}
      className="auth__container"
    >
      {children}
    </Container>
  );
};

export default AuthLayout;
