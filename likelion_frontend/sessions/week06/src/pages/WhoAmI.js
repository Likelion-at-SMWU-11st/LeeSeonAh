import React from "react";
import { GiCupidonArrow } from "react-icons/gi";
// react-icons/ 하위 폴더는 아이콘 이름 앞글자

const WhoAmI = () => {
  return (
    <div>
      <h1>자기소개</h1>
      <ol>
        <li>이름: 이선아</li>
        <li>취미: 수영</li>
        <li>
          최근 관심사: YOU
          <GiCupidonArrow />
        </li>
      </ol>
    </div>
  );
};

export default WhoAmI;
