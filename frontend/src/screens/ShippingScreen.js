import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../component/FormContainer";
import { saveShippingAddress } from "../actions/cartAction";
import CheckoutSteps from "../component/CheckoutSteps"

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <FormContainer>
    <CheckoutSteps step1 step2/>
      <h1>Shipping</h1>
      <Form onSubmit={submithandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city" style={{ marginTop: "15px" }}>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="city"
            placeholder="Enter address"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode" style={{ marginTop: "15px" }}>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="city"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country" style={{ marginTop: "15px" }}>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" style={{ marginTop: "15px" }}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
