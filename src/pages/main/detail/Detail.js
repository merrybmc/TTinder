
import Header from '../header/Header';
import styled from 'styled-components';
import DetailPage from '../DetailPage';

export default function Detail() {
  return (
    <StDetailWrap>
      <Header />
      <DetailPage />
    </StDetailWrap>
  );
}

const StDetailWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

