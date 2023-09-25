import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { firebaseAuth } from "../fbase";
import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const [userData, setUserData] = useState(null);
  const onSocialClick = async () => {
    const provider = new GoogleAuthProvider(); //provider를 구글로 설정
    await signInWithPopup(firebaseAuth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <GoogleBtn onClick={onSocialClick}>
        <FcGoogle style={{ cursor: "pointer" }} />
      </GoogleBtn>
    </Container>
  );
};

export default GoogleLogin;

const Container = styled.div`
  text-align: center;
`;
const GoogleBtn = styled.div``;
