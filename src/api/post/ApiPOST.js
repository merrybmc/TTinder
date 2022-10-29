import axios from 'axios';

// 토큰
const token = sessionStorage.getItem('Access_Token');

// api 주소 기본 설정
const api = axios.create({
  baseURL: '',
  headers: { Access_Token: token },
});

// 이메일 코드 전송
export async function RequestEmailSend(email) {
  const { data } = await api.post('', email);
  return data;
}

// 회원가입
export async function RequestSignUp(UserInfo) {
  const { data } = await api.post('', UserInfo);
  return data;
}
