import axios from 'axios';
import api from '../config';

export const loginApi = async (loginData) => {
  try {
    const res = await axios.post(`${api}/login`, { loginData });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const signupApi = async (user) => {
  try {
    const res = await axios.post(`${api}/signup`, { user });
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
