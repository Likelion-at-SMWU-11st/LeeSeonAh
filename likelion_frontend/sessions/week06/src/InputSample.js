import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInputs] = useState({
    //   userState를 통해 객체의 상태로 관리
    name: "",
    nickname: "",
  });
  const nameInput = useRef();

  const { name, nickname } = inputs;
  //const {name:n, nickname}=inputs 를 통해 name변수명을 n으로 변경 가능

  const onChange = (e) => {
    const { value, name } = e.target; //name은 key값 역할
    setInputs({
      ...inputs,
      [name]: value,
      //name과 nickname을 구분하기 위해 []대괄호 이용
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      {/* name=key역할, value=초기값 */}
      {/* onRest()이 호출되면 focus가 name input에 설정됨 -> 특정DOM을 선택*/}
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
