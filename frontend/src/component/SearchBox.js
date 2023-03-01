import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row>
      <Col md={10}>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
          style={{height:'40px'}}
        ></Form.Control></Col>
        <Col md={2}>
        <Button type="submit" variant="outline-light" style={{height:'40px', display:'flex', justifyContent:"center", alignItems:'center'}}>
          Search
        </Button>{" "}
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
