import React from "react";
import { Col } from "react-bootstrap";

function DetailPage(props) {
  return (
    <>
      <Col sm={12}
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <img src={props.image} alt="book.png" />
      </Col>
      <Col sm={12} className="mt-5 pt-5">
        <p className="fw-bold">
          Title : <span>{props.title}</span>
        </p>
        <p className="fw-bold">
          Publisher : <span>{props.publisher}</span>
        </p>
        <p className="fw-bold">Description :</p>
        <span className="descriptionText">{props.description}</span>
      </Col>
    </>
  );
}

export default DetailPage;