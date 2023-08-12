import React, { useEffect } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout.jsx";
import Container from "react-bootstrap/esm/Container.js";
import Banner from "./components/Banner/Banner.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import "./Cart.scss";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DefaultLayout>
      <Container as="main">
        <Banner
          pagename={"Card"}
          breadcrumb={"Card"}
        />
        <h3 className="cart-title">Shopping Cart</h3>
        <MainContent />
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
