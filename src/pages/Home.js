import styled from 'styled-components';
import HOME from './sources/home.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <StWrap>
        kkkkkz
        <StSignUpBox>
          <StSignUpBtn onClick={() => navigate('/signup')}>계정 만들기</StSignUpBtn>
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
  width: 100%;
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
  margin-right: 40px;
  font-weight: bold;
  border: 1px solid #fd5547;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #d74f3b;
    border: 1px solid #d74f3b;
  }
`;
