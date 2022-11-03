import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.180.97.182',
  // headers: { Authorization: token },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('authorization');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

export default api;
