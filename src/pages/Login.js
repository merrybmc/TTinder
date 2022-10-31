import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SlClose } from 'react-icons/sl';
import { useMutation } from '@tanstack/react-query';
import { EmailLoginData, axiosIns } from '../api/post/ApiPOST';
import { useNavigate } from 'react-router-dom';

export default function Login({ className, onClose, maskClosable, closable, visible }) {
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

  const { mutate: emailLogin } = useMutation(EmailLoginData, {});
  // const { mutate: logInToken } = useMutation(LoginTokenData, {
  //   onSuccess: (response) => {
  //     sessionStorage.setItem("access_token", response.header.access_token);
  //     sessionStorage.setItem("refresh_token", response.headers.refresh_token);
  //     axiosIns.defaults.headers.common[
  //       "Access_Token"
  //     ] = `${response.headers.access_token}`;
  //     navigate("/main");
  //   },
  //   onError: (err) => {
  //     alert("로그인에 실패했습니다");
  //   },
  // });

  const onSubmitLoginData = () => {
    // logInToken({ signInData });
    emailLogin({ signInData });
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} onClick={maskClosable ? onMaskClick : null} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner" onClick={(e) => e.stopPropagation()}>
          {closable && (
            <>
              <SlClose type="button" className="modal-close" size="auto" color="gray" onClick={onCloseEvent} />
              <StLogo>logo</StLogo>
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
              <StDiv>지금 TINDER 모바일 앱을 설치해 보세요!</StDiv>
              <StDiv>앱스토어 버튼들 </StDiv>
            </>
          )}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Login.propTypes = {
  visible: PropTypes.bool,
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
  background-color: #fff;
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

const StLogo = styled.div`
  background-color: red;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StWelCome = styled.div`
  background-color: orange;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StInfo = styled.div`
  background-color: yellow;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
`;
const StHelp = styled.div`
  background-color: green;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 6vh;
  display: flex;
  justify-content: center;
  font-size: medium;
  text-decoration: underline;
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
  border: 3px solid gray;
  border-radius: 30px;
  background-color: transparent;
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StButtonStyle = styled.button`
  width: 100%;
  max-width: 380px;
  height: 4.5vh;
  text-decoration: none;
  border: 3px solid gray;
  border-radius: 30px;
  background-color: transparent;
  font-size: x-large;
  cursor: pointer;
  &:hover {
    background-color: #eceded;
  }
`;
const StDiv = styled.div`
  width: 100%;
  max-width: 450px;
  height: 6vh;
`;
