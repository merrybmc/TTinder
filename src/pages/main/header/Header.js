import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header_Article from './sementic/Header_article';
import Header_Header from './sementic/Header_header';
import Header_NavBar from './sementic/Header_NavBar';

export default function Header() {
  return (
    <HeaderContainer>
      <Header_Header />
      <Header_NavBar />
      <Header_Article />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 375px;
  height: 973px;
`;
