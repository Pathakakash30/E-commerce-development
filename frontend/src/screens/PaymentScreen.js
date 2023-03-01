import React from "react";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../component/FormContainer";
import { savePaymentMethod } from "../actions/cartAction";
import CheckoutSteps from "../component/CheckoutSteps";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate("shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method </h1>
      <Form onSubmit={submithandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
        </Form.Group>
        <Row>
        <Col>
          <Form.Check
            type="radio"
            label="Paypal or Credit Card"
            id="Paypal"
            name="paymentMethod"
            value="Paypal"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>

          <Form.Check
            type="radio"
            label="Stripe"
            id="Stripe"
            name="paymentMethod"
            value="Stripe"
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
        </Col>
        </Row>
        <Button type="submit" variant="primary" style={{ marginTop: "15px" }}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
