import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SlClose } from 'react-icons/sl';
import { useMutation, useQuery } from '@tanstack/react-query';
import { EmailLoginData } from '../api/post/ApiPOST';
import { useNavigate } from 'react-router-dom';
import Logo3 from './sources/logo3.png';
import AppStoreIcon from './sources/appStore.png';
import GoogleStoreIcon from './sources/googlePlay.png';
import { CheckUserInfo } from '../api/get/ApiGET';

export default function Login(props) {
  const { className, onClose, maskClosable, closable, visible } = props;
  const [signInData, setSignInData] = useState('');
  const navigate = useNavigate();

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const onCloseEvent = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
    console.log(signInData);
  };

  const { mutate: emailLogin } = useMutation(EmailLoginData, {
    onSuccess: (response) => {
      sessionStorage.setItem('authorization', response.headers.authorization);
      sessionStorage.setItem('refresh_token', response.headers.refresh_token);
      {
        response.data.data.info === true ? navigate('/main') : navigate('/informationinput');
      }
    },
    onError: (err) => {
      alert('로그인에 실패했습니다');
    },
  });

  const onSubmitLoginData = () => {
    emailLogin(signInData);
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} onClick={maskClosable ? onMaskClick : null} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner" onClick={(e) => e.stopPropagation()}>
          {closable && (
            <>
              <SlClose type="button" className="modal-close" color="gray" onClick={onCloseEvent} />
              <StLogoBox>
                <StLogo src={Logo3}></StLogo>
              </StLogoBox>
              <StWelCome>계정만들기</StWelCome>
              <StInfo>
                로그인하면 TTinder 이용약관에 동의하는 것으로 간주됩니다. TTinder의 회원 정보 처리 방식은 개인정보
                처리방침 및 쿠키 정책에서 확인해 보세요.
              </StInfo>
              <StLoginBox>
                <StInPutStyle type="text" placeholder="이메일" name="email" onChange={onChangeHandler}></StInPutStyle>
                <StInPutStyle
                  type="text"
                  placeholder="비밀번호"
                  name="password"
                  onChange={onChangeHandler}
                ></StInPutStyle>
                <StButtonStyle
                  type="button"
                  onClick={() => {
                    onSubmitLoginData();
                  }}
                >
                  로그인
                </StButtonStyle>
              </StLoginBox>
              <StHelp>로그인이 안되나요?</StHelp>
              <StDiv>지금 TTINDER 모바일 앱을 설치해 보세요!</StDiv>
              <DivBox>
                <AppStoreDiv src={AppStoreIcon}></AppStoreDiv>
                <GoogleStoreDiv src={GoogleStoreIcon}></GoogleStoreDiv>
              </DivBox>
            </>
          )}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Login.propTypes = {
  visible: PropTypes.func,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: black;
  border-radius: 10px;
  width: 100%;
  max-width: 480px;
  max-height: 750px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 40px;

  .modal-close {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    margin-left: auto;
    &:hover {
      transform: rotate(-45deg);
    }
  }
`;

const StLogoBox = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StLogo = styled.img`
  width: 18px;
  height: 21px;
`;
const StWelCome = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-weight: 900;
  color: white;
`;
const StInfo = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  color: white;
`;
const StHelp = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 6vh;
  display: flex;
  justify-content: center;
  font-size: medium;
  text-decoration: underline;
  color: white;
`;

const StLoginBox = styled.div`
  width: 100%;
  max-width: 450px;
  height: 18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StInPutStyle = styled.input`
  width: 100%;
  max-width: 380px;
  height: 4.5vh;
  text-decoration: none;
  border: 3px solid white;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
    font-size: x-large;
    text-align: center;
  }
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StButtonStyle = styled.div`
  width: 100%;
  max-width: 380px;
  height: 4.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 3px solid white;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  font-size: x-large;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
const StDiv = styled.div`
  width: 100%;
  max-width: 450px;
  height: 6vh;
  font-style: italic;
  font-weight: 900;
  color: white;
`;

const DivBox = styled.div`
  width: 100%;
  max-width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const AppStoreDiv = styled.img`
  width: 156px;
  height: 49px;
`;

const GoogleStoreDiv = styled.img`
  width: 156px;
  height: 49px;
`;
