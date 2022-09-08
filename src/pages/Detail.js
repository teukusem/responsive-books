import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import {BackButton,DetailComponent} from "../components";


function DetailPage() {
  const navigate = useNavigate();
  let data = (JSON.parse(localStorage.getItem("detail")));
  
  const [detailState, setDetailState] = useState(data);


  return (
    <div>
      <BackButton onClick={() => navigate("/home")} />
      <h1 className="fw-bold mt-3 ms-4">Detail</h1>
      <Container>
        <Row>
          <DetailComponent
          image={detailState.volumeInfo.imageLinks.smallThumbnail}
          title={detailState.volumeInfo.title}
          publisher={detailState.volumeInfo.publisher}
          description={detailState.volumeInfo.description}
          />
        </Row>
      </Container>
    </div>
  );
}

export default DetailPage;
