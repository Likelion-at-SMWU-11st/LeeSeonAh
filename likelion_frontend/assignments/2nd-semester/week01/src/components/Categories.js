import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
  {
    name: "apple",
    text: <FontAwesomeIcon icon={faApple} />,
  },
  {
    name: "wallstreet",
    text: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/WSJ_Logo.svg/2560px-WSJ_Logo.svg.png"
        alt="WSJ"
      />
    ),
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;

    &:hover {
      color: #3bc9db;
    }
  }

  img {
    height: 0.9rem;
  }

  & + & {
    margin-left: 1.5rem;
  }
`;

{
  /* 아래부터 작성해 주세요! */
}
const Categories = ({ onSelect }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          to={c.name === "all" ? "/" : `/${c.name}`}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
