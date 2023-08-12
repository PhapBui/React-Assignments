import React, { useEffect } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout.jsx";
import Subcribe from "../../components/Form/Subcribe/Subcribe.jsx";
import Container from "react-bootstrap/esm/Container.js";
import Banner from "./components/Banner/Banner.jsx";
import Service from "./components/Service/Service.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import Category from "./components/Category/Category.jsx";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../app/productApi.js";
import { productActions } from "../../features/product/productSlice.js";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productList);

  useEffect(() => {
    const fetchData = async () => {
      const res = await productApi.getAll();
      dispatch(productActions.getAllProduct(res.slice(0, 8)));
    };
    fetchData();
  }, [dispatch]);

  // auto scroll top after page loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DefaultLayout>
      <Container as="main">
        <Banner />
        <Category />
        <ProductList
          productList={products}
          col={4}
          title={true}
          modal={true}
        />
        <Service />
        <Subcribe />
      </Container>
    </DefaultLayout>
  );
};

export default Home;