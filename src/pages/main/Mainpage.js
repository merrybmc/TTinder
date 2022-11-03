import styled from 'styled-components';
import Main from './main/Main';

export default function Mainpage() {
  return (
    <MainContainer>
      <UserInfoBox>
        <UserImg src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/6n5cXdQLDt3_hJi8PCyvtduleAU.jpg" />
        <IsConnect>🟡 접속중</IsConnect>
        <UserProfile>
          <UserProfileName>보노보노</UserProfileName>
          <UserProfileAge>28</UserProfileAge>
        </UserProfile>
      </UserInfoBox>
      <UserInfoBox>
        <UserImg src="https://pbs.twimg.com/media/EbSKBtIUMAA47Eq.jpg" />
        <IsUnConnect>🔴 접속종료</IsUnConnect>
        <UserProfile>
          <UserProfileName>보노보노</UserProfileName>
          <UserProfileAge>28</UserProfileAge>
        </UserProfile>
      </UserInfoBox>
      <UserInfoBox>
        <UserImg src="https://t1.daumcdn.net/cfile/tistory/99606E405A33E19D1D" />
        <IsConnect>🟡 접속중</IsConnect>
        <UserProfile>
          <UserProfileName>페페</UserProfileName>
          <UserProfileAge>36</UserProfileAge>
        </UserProfile>
      </UserInfoBox>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 1544px;
  height: 973px;
  background-color: #f0f2f4;
  overflow-y: scroll;
`;

const UserInfoBox = styled.div`
  margin-left: 583px;
  width: 376px;
  height: 566px;
  background-color: white;
  margin-top: 130px;
  margin-bottom: 100px;
  position: relative;
  cursor: pointer;
  border: 1px solid white;
`;

const UserImg = styled.img`
  width: 376px;
  height: 566px;
  position: absolute;
`;

const IsConnect = styled.div`
  width: 100px;
  margin-top: 5px;
  position: absolute;
  font-weight: bold;
  margin-left: 295px;
`;

const IsUnConnect = styled.div`
  width: 100px;
  position: absolute;
  font-weight: bold;
  color: #778194;
  margin-left: 280px;
  margin-top: 5px;
`;

const UserProfile = styled.div`
  position: absolute;
  margin-top: 500px;
  margin-left: 20px;
`;

const UserProfileName = styled.span`
  font-size: 35px;
  color: white;
  font-weight: bold;
`;

const UserProfileAge = styled.span`
  font-size: 26px;
  color: white;
  margin-top: 500px;
  margin-left: 10px;
`;
