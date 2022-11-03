import axios from 'axios';
import { useState } from 'react';

// 토큰
const token = sessionStorage.getItem('Access_Token');

// api 주소 기본 설정
const api = axios.create({
  baseURL: 'http://54.180.97.182',
  headers: { Access_Token: token },
});

// 이메일 코드 전송
export async function RequestEmailSend(email) {
  const { data } = await axios.post('http://54.180.97.182/emailConfirm', email);
  console.log('api통신', data);
  return data;
}

// 회원가입
export async function RequestSignUp(UserInfo) {
  const { data } = await axios.post('http://54.180.97.182/signup', UserInfo);
  return data;
}

// 로그인
export async function EmailLoginData(EmailData) {
  const { data } = await api.post('/signin', EmailData);
  return data;
}
