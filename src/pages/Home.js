
import HOME from './sources/home.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const onOpenModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StWrap>
        <LoginButton

          type='button'
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
        <StSignUpBox>
          <StSignUpBtn
            onClick={() => {
              navigate("/signup");
            }}
          >
            계정 만들기
          </StSignUpBtn>
        </StSignUpBox>
        <StCoverImg src={HOME} />
      </StWrap>
    </>
  );
}

const StWrap = styled.div`
  position: relative;
`;

const StCoverImg = styled.img`
  height: 100%;
  vertical-align: middle;
`;

const StSignUpBox = styled.div`
  height: auto;
  margin-top: 628px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StSignUpBtn = styled.button`
  width: 267px;
  height: 44px;
  position: absolute;
  background-color: #fd5547;
  font-size: 20px;
  color: white;
  font-weight: bold;
  border: 1px solid #fd5547;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #d74f3b;
    border: 1px solid #d74f3b;
  }
`;
const LoginButton = styled.button`
  width: 123px;
  height: 46px;
  border: none;
  border-radius: 30px;
  background-color: white;
  position: absolute;
  margin-left: 1768px;
  margin-top: 20px;
  color: black;
  font-size: x-large;
  font-family: sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #d9d9da;
  }
`;
