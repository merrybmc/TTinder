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

// 메인페이지 유저 정보 읽기
// export async function ReadUserData() {
//   const response = await api.get('/mainpage?page=1');
//   return response.data;
// }

// export async function ReadUserData(pageParam) {
//   console.log(pageParam, `/mainpage?page=${pageParam}`);
//   const { data } = await api.get(`/mainpage?page=${pageParam}`);

//   return { data, nextPage: pageParam + 1 };
// }

export const ReadUserData = async (pageParams) => {
  const { data } = await api.get(`/mainpage?page=${pageParams}`);
  return { data, nextPage: pageParams + 1 };
};

export async function ReadMsg() {
  const response = await api.get('/messages');
  return response.data;
}

export async function DetailUserData(id) {
  const response = await api.get(`/details/${id}`);
  return response.data;
}

export async function ReadMyProfile() {
  const response = await api.get('/profile');
  return response.data;
}

export async function ReadSortData({ gender, minage, maxage, MBTI, location }) {
  console.log('/mainpage/filter?gender=여&age=20,30&mbti=INFJ&location=경기');
  console.log('log', `/mainpage/filter?gender=${gender}&age=${minage},${maxage}&mbti=${MBTI}&location=${location}`);
  const response = await api.get(
    `/mainpage/filter?gender=${gender}&age=${minage},${maxage}&mbti=${MBTI}&location=${location}`
  );
  return response.data;
}
// console.log('log', `/mainpage/filter?gender=${gender}&age=${minage},${maxage}&mbti=${MBTI}&location=${location}`);
// `/mainpage/filter?gender=${gender}&age=${minage},${maxage}&mbti=${MBTI}&location=${location}`
