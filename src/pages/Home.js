import HOME from "./sources/home.png";
import styled from "styled-components";
import { useState } from "react";
import Login from "./Login";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const onOpenModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div id="BackgroundImg">
      <img src={HOME} />
      <LoginButton
        type="button"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        로그인
        {modalOpen && (
          <Login
            visible={onOpenModal}
            closable={true}
            maskClosable={true}
            onClose={onCloseModal}
          ></Login>
        )}
      </LoginButton>
    </div>
  );
}

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
