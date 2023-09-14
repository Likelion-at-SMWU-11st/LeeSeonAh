import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

{
  /* 아래부터 작성해 주세요! */
}
// API_KEY 에 본인 API 키를 넣어주세요!
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_NEWSAPI_API_KEY;

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);

      if (category === "apple") {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=apple&from=2023-09-13&to=2023-09-13&sortBy=popularity&apiKey=${apiKey}`
          );
          setArticles(response.data.articles);
        } catch (e) {
          console.log(e);
        }
      } else if (category === "wallstreet") {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`
          );
          setArticles(response.data.articles);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const query = category === "all" ? "" : `&category=${category}`;

          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`
          );
          setArticles(response.data.articles);
        } catch (e) {
          console.log(e);
        }
      }

      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;