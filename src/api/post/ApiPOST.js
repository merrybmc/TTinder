import axios from 'axios';
import api from '../api';

// 토큰
// const token = sessionStorage.getItem('authorization');

// api 주소 기본 설정
// const api = axios.create({
//   baseURL: 'http://54.180.97.182',
//   // headers: { Authorization: token },
// });

// api.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem('authorization');
//   if (token) {
//     config.headers['Authorization'] = token;
//   }
//   return config;
// });

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
  const data = await axios.post('http://54.180.97.182/signin', EmailData);
  console.log(data);
  return data;
}

// 로그아웃
export async function EmailLogoutData() {
  const data = await api.post('/signout');
  console.log(data);
  return data;
}

// 메세지 보내기
export async function MsgSend({ id, stateMsgSend }) {
  const data = await api.post(`/messages/${id}`, stateMsgSend);
  return data;
}
