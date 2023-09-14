import React, { useCallback, useRef, useState } from "react";
// import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
    // userCallback 안에서 사용하는 파라미터로 들어오는 함수/state/props/함수가 있으면 deps배열 안에 포함해야함
    // 변하는 인자를 넣어야 함
    // 함수에서 해당 값들을 참조할 때 가장 최신 값을 참조하기 위해
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "sookmyung",
      email: "sookmyung@example.com",
      active: true,
    },
    {
      id: 2,
      username: "mutsa",
      email: "likelionsmwu@example.com",
      active: false,
    },
    {
      id: 3,
      username: "seonah",
      email: "seonah@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  // useRef의 파라미터 값= .current 값의 기본값

  const onCreate = useCallback(() => {
    //배열에 항목을 추가하는 로직
    const user = {
      id: nextId.current,
      username,
      email,
    };

    //함수형 업데이트
    //setUsers에 등록하는 콜백함수의 파라미터에서 최신 users참조 가능
    setUsers((users) => users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열 생성
    //즉, user.id가 id인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    //id값을 비교해서 id가 다르면 그대로 두고, 같으면 active값 변경
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      {/* 여기서 onChange는 원래 props가 아니라 만든 거 */}
      <br />
      <hr />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
