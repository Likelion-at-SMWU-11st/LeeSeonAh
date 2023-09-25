import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "../components/auth/AuthTemplate";
import { ButtonWithMarginTop } from "../components/common/Button";
import { firebaseAuth } from "../fbase";
import palette from "../lib/styles/palette";
import { AuthFormBlock, Footer, StyledInput } from "./LoginPage";

const RegisterPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setRegisterEmail(value);
    } else if (name === "password") {
      setRegisterPassword(value);
    }
  };

  const signup = async (e) => {
    e.preventDefault(); //form으로 묶여있을 때 필수
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      //   await sendEmailVerification(firebaseAuth.currentUser);
      //   alert("회원가입이 완료되었습니다! 이메일을 확인해주세요.");
      console.log(createdUser);
      setRegisterEmail("");
      setRegisterPassword("");
      await updateProfile(firebaseAuth.currentUser);
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case "auth/weak-password":
          break;
        case "auth/invalid-email":
          break;
        case "auth/email-already-in-use":
          break;
        default:
          break;
      }
    }
  };
  return (
    <AuthTemplate>
      <AuthFormBlock>
        <h3>회원가입</h3>
        <form>
          <StyledInput
            type="email"
            placeholder="이메일"
            name="email"
            value={registerEmail}
            onChange={onChange}
          />
          <StyledInput
            type="password"
            placeholder="비밀번호"
            name="password"
            value={registerPassword}
            onChange={onChange}
          />
          <ButtonWithMarginTop green fullWidth onClick={signup}>
            회원가입
          </ButtonWithMarginTop>
        </form>
        <Footer>
          <Link to="/login">로그인</Link>
        </Footer>
      </AuthFormBlock>
    </AuthTemplate>
  );
};

export default RegisterPage;
