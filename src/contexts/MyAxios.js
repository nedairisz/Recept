import axios from "axios";

export const myAxios = axios.create({
  baseURL: 'http://127.0.0.1:8001/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});