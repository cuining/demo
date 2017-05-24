import axios from 'axios';

const config = {
  baseURL: 'https://atfcapi.beta.elenet.me/atfcapi/',
}

const API = axios.create({
  baseURL: config.baseURL
});

API.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

API.interceptors.response.use(response => {
  return response.data.data;
}, error => {
  return Promise.reject(new Error(error.response.data.msg));
});

export default API;
