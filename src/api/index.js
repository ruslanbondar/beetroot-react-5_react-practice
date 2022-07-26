import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export const instance = axios.create({
  baseURL: url,
});
