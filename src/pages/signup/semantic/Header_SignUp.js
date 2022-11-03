import styled from 'styled-components';
import Logo from '../../sources/logo.png';
import { useNavigate } from 'react-router-dom';
export default function SignUp_Header() {
  const navigate = useNavigate();

  return (
    <>
      <StLogo
        src={Logo}
        onClick={() => {
          navigate('/');
        }}
      />
      <StLogoTitleBox>
        <StLogoLine />
        <StLogoTitle>회원가입</StLogoTitle>
        <StLogoLine />
      </StLogoTitleBox>
    </>
  );
}

const StLogo = styled.img`
  width: 119px;
  height: 28px;
  margin-left: 30px;
  margin-top: 30px;
  cursor: pointer;
`;

const StLogoTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const StLogoLine = styled.div`
  width: 25%;
  height: 1px;
  background-color: black;
  cursor: default;
`;

const StLogoTitle = styled.p`
  width: 50%;
  height: 38px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  cursor: default;
`;
