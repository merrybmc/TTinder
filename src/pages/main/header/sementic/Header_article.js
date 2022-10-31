import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { HeaderNav } from '../../../../Store/store';
import Header_SortBox from './Header_SortBox';
import Header_MsgBox from './Header_MsgBox';

export default function Header_Article() {
  const HeaderNavState = useRecoilValue(HeaderNav);
  console.log(HeaderNavState);

  return <StArticleContainer>{HeaderNavState === 0 ? <Header_SortBox /> : <Header_MsgBox />}</StArticleContainer>;
}

const StArticleContainer = styled.div`
  width: 100%;
  height: 837px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
