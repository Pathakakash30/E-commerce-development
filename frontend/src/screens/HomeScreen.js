import React, {useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";


import { listProducts } from "../actions/productActions";
import Loader from "../component/Loader";
import Message from "../component/Message";
import Paginate from "../component/Paginate";
import ProductCarousel from "../component/ProductCarousel";
import Meta from "../component/Meta";

import Product from "../component/Product";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />

      {!keyword ? <ProductCarousel /> : <Link to='/' className="btn btn-light">Go back</Link>}
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((item) => (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={item} />
              </Col>
            ))}
          </Row>

          <Paginate pages={pages} page={page} keyword={keyword && keyword} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
