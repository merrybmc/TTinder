import HOME from "./sources/home.png";
import styled from "styled-components";
import { useState } from "react";
import Login from "./Login";

export default function Home() {
// zzz
  return (
    <>
      <StWrap>
        <StSignUpBox>
          <StSignUpBtn>계정 만들기</StSignUpBtn>
        </StSignUpBox>
        <StCoverImg src={HOME} />
      </StWrap>
    </>

  );
}
//df
const BackgroundImg = styled.image`
  display: flex;
  position: absolute;
`;

const LoginButton = styled.button`
  width: 120px;
  height: 46px;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  position: relative;
  bottom: 955px;
  margin-left: 1726px;
  color: black;
  font-size: x-large;
  font-family: sans-serif;

`;
