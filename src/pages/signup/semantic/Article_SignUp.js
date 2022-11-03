import styled from 'styled-components';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { RequestEmailSend, RequestSignUp } from '../../../api/post/ApiPOST';
import { useNavigate } from 'react-router-dom';

export default function SignUp_Article() {
  // Router navigate
  const navigate = useNavigate();

  // useState 이메일, 비밀번호 담기
  const [emailPassword, setEmailPassword] = useState();

  // useState 코드 담기
  const [emailCode, setEmailCode] = useState();

  // useState 코드 담기
  const [myEmailCode, setMyEmailCode] = useState();

  // useState 비밀번호 확인 담기
  const [passwordCheck, setPasswordCheck] = useState();

  // useState 발송 완료 판단
  const [codeSendBtn, setCodeSendBtn] = useState(0);

  // useState 이메일 잘못 입력한 경우 에러 출력
  const [errorInputEmail, setErrorInputEmail] = useState();

  // useState 인증 완료 판단
  const [codeCertifyBtn, setCodeCertifyBtn] = useState(0);

  // useState 코드 잘못 입력한 경우 에러 출력
  const [errorInputCertify, setErrorInputCertify] = useState();

  // useState 비밀번호 확인/ 회원가입 완료 판단
  const [SignUpBtn, setSignUpBtn] = useState(0);

  // useState 비밀번호 확인 잘못 입력한 경우 에러 출력
  const [errorPasswordCheck, setErrorPasswordCheck] = useState(1);

  // onChange 이메일 입력
  const onChangeEmail = (event) => {
    const { name, value } = event.target;
    setEmailPassword({ ...emailPassword, [name]: value });
    console.log(emailPassword);
  };

  // onChange 코드 입력
  const onChangeCode = (event) => {
    const value = event.target.value;
    setMyEmailCode(value);
  };

  // onChange 패스워드 입력
  const onChangePassword = (event) => {
    const { name, value } = event.target;
    setEmailPassword({ ...emailPassword, [name]: value });
  };

  // onChange 패스워드 확인 입력
  const onChangePasswordCheck = (event) => {
    const value = event.target.value;
    setPasswordCheck(value);
  };

  const { mutate: MutateEmailSend } = useMutation(RequestEmailSend, {
    onSuccess: (temp) => {
      setCodeSendBtn(1);
      setEmailCode(temp.data.code);
    },
    onError: (temp) => {
      setErrorInputEmail(temp.response.data.error.message);
    },
  });

  const { mutate: MutateSignUp } = useMutation(RequestSignUp, {
    onSuccess: () => {
      alert('회원가입 완료');
      navigate('/');
    },
    onError: () => {
      setErrorPasswordCheck('회원가입 오류');
    },
  });

  // 이메일 코드 전송 버튼
  const onEmailCodeSend = () => {
    const myEmail = emailPassword.email;
    // 이메일 유효성 검사
    if (myEmail.includes('@') === true) {
      setErrorInputEmail('');
      MutateEmailSend(emailPassword);
    } else {
      setErrorInputEmail('이메일을 잘못 입력하셨습니다.');
    }
  };

  // 코드 인증 버튼
  const onCodeCertify = () => {
    if (emailCode === myEmailCode) {
      setCodeCertifyBtn(1);
      setErrorInputCertify('');
    } else {
      setErrorInputCertify('코드를 잘못 입력하셨습니다.');
    }
  };

  // 회원가입 버튼
  const onSignUp = () => {
    if (emailPassword.password === passwordCheck) {
      setErrorPasswordCheck('');
      MutateSignUp(emailPassword);
      console.log(emailPassword);
    } else {
      setErrorPasswordCheck('비밀번호를 잘못 입력하셨습니다.');
    }
  };

  return (
    <>
      <StEmailCodeP>이메일 입력</StEmailCodeP>
      <StEmailCodeInputBox>
        <StEmailCodeInput name="email" onChange={onChangeEmail} placeholder="이메일 입력..." />

        {codeSendBtn === 0 ? (
          <StEmailCodeBtn
            onClick={() => {
              onEmailCodeSend();
            }}
          >
            코드 발송
          </StEmailCodeBtn>
        ) : (
          <StEmailCodeNoneBtn>발송 완료</StEmailCodeNoneBtn>
        )}
      </StEmailCodeInputBox>
      <StEmailCodeErrorP>{errorInputEmail}</StEmailCodeErrorP>

      {codeSendBtn === 1 ? (
        <>
          <StEmailCodeP>코드 입력</StEmailCodeP>
          <StEmailCodeInputBox>
            <StEmailCodeInput type="text" onChange={onChangeCode} placeholder="코드 입력..." />

            {codeCertifyBtn === 0 ? (
              <StEmailCodeBtn
                onClick={() => {
                  onCodeCertify();
                }}
              >
                인증하기
              </StEmailCodeBtn>
            ) : (
              <StEmailCodeNoneBtn>인증 완료</StEmailCodeNoneBtn>
            )}
          </StEmailCodeInputBox>
          <StEmailCodeErrorP>{errorInputCertify}</StEmailCodeErrorP>
        </>
      ) : null}

      {codeCertifyBtn === 1 ? (
        <>
          <StEmailCodeP>비밀번호 입력</StEmailCodeP>
          <StEmailCodeInputBox>
            <StEmailCodeInput
              type="password"
              name="password"
              onChange={onChangePassword}
              placeholder="비밀번호 입력..."
            />
          </StEmailCodeInputBox>

          <StEmailCodeP>비밀번호 확인</StEmailCodeP>
          <StEmailCodeInputBox>
            <StEmailCodeInput type="password" onChange={onChangePasswordCheck} placeholder="비밀번호 입력..." />
          </StEmailCodeInputBox>

          {SignUpBtn === 0 ? (
            <>
              <StEmailCodeErrorP>{errorPasswordCheck}</StEmailCodeErrorP>

              <StSignUpBtn
                onClick={() => {
                  onSignUp();
                }}
              >
                회원가입
              </StSignUpBtn>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
}

const StEmailCodeP = styled.p`
  display: flex;
  margin: 0 auto;
  width: 30%;
  height: auto;
  margin-top: 60px;
  font-size: 20px;
  cursor: default;
`;

const StEmailCodeInputBox = styled.div`
  height: auto;
  margin-top: 5px;
  display: flex;
  margin-left: 670px;
`;

const StEmailCodeInput = styled.input`
  width: 20%;
  height: 25px;
  margin-top: 10px;
  display: flex;
  background-color: #111418;
  color: white;
  font-size: 18px;

  ::placeholder {
    color: #667869;
  }
`;

const StEmailCodeBtn = styled.button`
  width: 80px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9px;
  margin-left: 10px;
  background-color: #656e7b;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #000000;
  }
`;

const StEmailCodeNoneBtn = styled.div`
  width: 80px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9px;
  margin-left: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: default;
`;

const StEmailCodeErrorP = styled.p`
  display: flex;
  margin: 0 auto;
  width: 30%;
  height: auto;
  font-size: 12px;
  color: red;
  cursor: default;
`;

const StSignUpBtn = styled.button`
  width: 80px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9px;
  margin-left: 670px;
  background-color: #656e7b;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #000000;
  }
`;
