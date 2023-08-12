import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../components/Layouts/DefaultLayout.jsx";
import {
  fetchProductById,
  fetchRelateList,
} from "../../features/product/productSlice.js";
import Description from "./components/Description/Description.jsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.jsx";
import Relate from "./components/Relate/Relate.jsx";

const Detail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.getProductById);
  const relateList = useSelector((state) => state.products.relateList);

  const { productId } = useParams();

  const { category } = product;

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    dispatch(fetchRelateList(category));
  }, [dispatch, category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DefaultLayout>
      <Container as="main">
        <ProductInfo productData={product} />
        <Description text={product.long_desc} />
        <Relate productList={relateList} />
      </Container>
    </DefaultLayout>
  );
};

export default Detail;
