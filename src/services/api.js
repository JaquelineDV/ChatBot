import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60883b43a6f4a3001742601c.mockapi.io/users',
});

export default api;