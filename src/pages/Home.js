import styled from 'styled-components';

import HOME from './sources/home.png';

export default function Home() {
  return (
    <>
      <StWrap>
        <StSignUpBox>
          ddd<StSignUpBtn>계정 만들기</StSignUpBtn>
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
  margin-top: 617px;
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
