import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

function BookList({ month, week }) {
  //books 상태변수와 setMovies라는 상태 업데이트 함수를 선언
  //초기값으로 빈 배열([])을 설정
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //컴포넌트가 마운트될 때 한 번만 실행되도록 useEffect로 설정
    axios
      .get("  http://localhost:8000/books")
      //json-server 주소와 통신하여 서버에서 영화 리스트를 가져옴
      .then((response) => {
        //응답한 데이터를 setMovies를 통해 상태를 업데이트함
        setBooks(response.data);
      })
      .catch((error) => {
        //에러가 발생하면 콘솔에 출력
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>
        {month}월 {week}주차 추천 도서
      </h1>
      <Row xs={1} md={2} className="g-4">
        {books.map((book) => (
          <Col key={book.id} style={{ maxWidth: "18rem" }} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.cover} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="text-muted">{book.author}</Card.Text>

                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BookList;
