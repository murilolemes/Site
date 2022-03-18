import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  // baseURL: 'http://10.61.20.88:3333',
});

export default api;
