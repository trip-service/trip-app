import axios from 'axios';
import Constants from 'expo-constants';

const {extra} = Constants.manifest;

const server = axios.create({
  baseURL: extra.domain,
});

export const loginResult = ( payload) =>
  server.post('/auth/login', payload, {
    headers: { 'Content-Type': 'application/json'},
  });

export default server;
