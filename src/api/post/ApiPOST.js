import axios from 'axios';

// 토큰
const token = sessionStorage.getItem('authorization');

// api 주소 기본 설정
const api = axios.create({
  baseURL: 'http://54.180.97.182',
  headers: { Authorization: token },
});

// 이메일 코드 전송
export async function RequestEmailSend(email) {
  const { data } = await api.post('/emailConfirm', email);
  return data;
}

// 회원가입
export async function RequestSignUp(UserInfo) {
  const { data } = await api.post('/signup', UserInfo);
  return data;
}

// 로그인
export async function EmailLoginData(EmailData) {
  const data = await api.post('/signin', EmailData);
  return data;
}

//개인정보

export async function FormDatas(PersonalData) {
  const { data } = await api.post('/info', PersonalData);
  return data;
}

export default api;
