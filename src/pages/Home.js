import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Input, Spin } from "antd";
import axios from "axios";

import {CardComponent} from "../components";

function Home() {
  const { Search } = Input;
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const dataBook = async () => {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA";
    const response = await axios.get(url);
    setBooks(response.data);
    setIsLoading(false);
    return response.data;
  };
  console.log(books);

  useEffect(() => {
    dataBook();
  }, []);

  const onClickDetail = (item) => {
    localStorage.setItem("detail", JSON.stringify(item));
    navigate("/detail");
  };

  return (
    <div className="library-page">
      {/* <h1>Hai</h1> */}
      <Container>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <Spin />
          </div>
        ) : (
          <Row>
            <div className="d-flex justify-content-end flex-end pt-1">
              <Search
                placeholder="Seacrh books"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                style={{
                  width: 200,
                }}
              />
            </div>
            {books?.items
              ?.filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.volumeInfo.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <Col
                    lg={2}
                    className="mt-3 d-flex justify-content-center"
                    key={index}>
                    <CardComponent
                      onClick={() => onClickDetail(item)}
                      image={item.volumeInfo.imageLinks.smallThumbnail}
                      title={item.volumeInfo.title.slice(0, 31)}
                    />
                  </Col>
                );
              })}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Home;
