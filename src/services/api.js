import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://mldesenvolvimentoweb.netlify.app/api',
});

export default api;
