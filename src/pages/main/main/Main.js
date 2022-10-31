import Header from '../header/Header';
import styled from 'styled-components';
import Mainpage from '../Mainpage';

export default function Main() {
  return (
    <StMainWrap>
      <Header />
      <Mainpage />
    </StMainWrap>
  );
}

const StMainWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
