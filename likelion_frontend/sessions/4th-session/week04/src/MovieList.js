import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  //movies라는 상태변수와 setMovies라는 상태 업데이트 함수를 선언
  //초기값으로 빈 배열([])을 설정
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //컴포넌트가 마운트될 때 한 번만 실행되도록 useEffect로 설정
    axios
      .get("  http://localhost:8000/movies")
      //json-server 주소와 통신하여 서버에서 영화 리스트를 가져옴
      .then((response) => {
        //응답한 데이터를 setMovies를 통해 상태를 업데이트함
        setMovies(response.data);
      })
      .catch((error) => {
        //에러가 발생하면 콘솔에 출력
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>영화 리스트</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
