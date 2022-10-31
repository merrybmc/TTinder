import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { HeaderNav } from '../../../../Store/store';
export default function Header_NavBar() {
  const [HeaderNavRecoil, setHeaderNavRecoil] = useRecoilState(HeaderNav);

  const onClickSortBar = () => {
    setHeaderNavRecoil(0);
  };

  const onClickMsgBar = () => {
    setHeaderNavRecoil(1);
  };
  return (
    <StNavContainer>
      <StNavBar>
        {HeaderNavRecoil === 0 ? (
          <>
            <StNavPBox
              onClick={() => {
                onClickSortBar();
              }}
            >
              <StNavSortP>정렬</StNavSortP>
              <StNavSortLine />
            </StNavPBox>
            <StNavPBox
              onClick={() => {
                onClickMsgBar();
              }}
            >
              <StNavSortP>메시지</StNavSortP>
            </StNavPBox>
          </>
        ) : (
          <>
            <StNavPBox
              onClick={() => {
                onClickSortBar();
              }}
            >
              <StNavSortP>정렬</StNavSortP>
            </StNavPBox>
            <StNavPBox
              onClick={() => {
                onClickMsgBar();
              }}
            >
              <StNavSortP2>메시지</StNavSortP2>
              <StNavSortLine2 />
            </StNavPBox>
          </>
        )}
      </StNavBar>
    </StNavContainer>
  );
}

const StNavContainer = styled.div`
  width: 100%;
  height: 49px;
  background-color: #ffd3d3;
`;

const StNavBar = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
`;

const StNavPBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const StNavSortP = styled.span`
  width: 50px;
  margin-top: 12px;
  margin-left: 15px;
  font-weight: bold;
`;

const StNavSortP2 = styled.span`
  width: 50px;
  margin-top: 12px;
  margin-left: 8px;
  font-weight: bold;
`;

const StNavSortLine = styled.div`
  width: 50px;
  height: 2px;
  margin-right: 1px;
  background-color: red;
`;

const StNavSortLine2 = styled.div`
  width: 65px;
  height: 2px;
  margin-left: 7px;
  background-color: red;
`;
