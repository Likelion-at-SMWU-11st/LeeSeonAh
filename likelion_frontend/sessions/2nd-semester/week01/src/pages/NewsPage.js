import React, { useState } from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

{
  /* 아래부터 작성해 주세요! */
}
const NewsPage = () => {
  //현재 url의 category 매개변수를 가져옴
  const { category } = useParams();
  // category 매개변수가 없으면 기본값 all을 사용
  const [selectedCategroy, setSelectedCategory] = useState(category || "all");

  const handleCategorySelect = (newCategory) => {
    setSelectedCategory(newCategory);
  };
  return (
    <>
      <Categories onSelect={handleCategorySelect} />
      <NewsList category={selectedCategroy} />
    </>
  );
};

export default NewsPage;
