import styled from 'styled-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { EmailLogoutData } from '../../../../api/post/ApiPOST';
import { useNavigate } from 'react-router-dom';
import { ReadMyProfile } from '../../../../api/get/ApiGET';

export default function Header_Header() {
  const navigate = useNavigate();

  const { data: profile } = useQuery(['myProfile'], ReadMyProfile, {
    onSuccess: (temp) => {
      console.log('myprofile', temp);
    },
  });

  const { mutate: logoutMutate } = useMutation(EmailLogoutData, {
    onSuccess: (temp) => {
      console.log(temp);
      sessionStorage.removeItem('authorization');
      sessionStorage.removeItem('refresh_token');
      alert('로그아웃 완료');
      navigate('/');
    },
    onError: () => {
      console.log('토큰', sessionStorage.getItem('authorization'));
    },
  });

  const onLogout = () => {
    logoutMutate();
  };

  return (
    <HeaderContainer>
      <StProfileBox>
        <StProfileImg src={profile?.data.photo}></StProfileImg>
        <StProfileName>{profile?.data.userName}</StProfileName>
      </StProfileBox>
      <StLogout
        onClick={() => {
          onLogout();
        }}
      >
        로그아웃
      </StLogout>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 87px;
  background-color: #fd5b40;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const StProfileBox = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
`;

const StProfileImg = styled.img`
  width: 36px;
  height: 37px;
  object-fit: cover;
  border-radius: 20px;
  margin-left: 12px;
`;

const StProfileName = styled.p`
  color: white;
  margin-left: 12px;
  font-weight: bold;
`;

const StLogout = styled.button`
  margin-right: 20px;
  border: 1px solid #ccd0d4;
  border-radius: 15px;
  height: 25px;
  width: 60px;
  background-color: #ccd0d4;
  &:hover {
    border: 1px solid #b4b9bf;
    border-radius: 15px;
    background-color: #b4b9bf;
  }
`;
