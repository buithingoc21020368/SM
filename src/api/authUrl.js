import axios from "axios";
import headerAuthApi from "./headerAuthApi";

const baseApiAuthUrl = `${import.meta.env.VITE_BASE_API_URL}/auth`;

export const authApi = {
  register(data) {
    return axios.post(`${baseApiAuthUrl}/register`, data);
  },
  registerCheckOtp(data) {
    return axios.post(`${baseApiAuthUrl}/register/check-otp`, data);
  },
  login(data) {
    return axios.post(`${baseApiAuthUrl}/authentication`, data);
  },
  changePassword(data) {
    return axios.post(`${baseApiAuthUrl}/change-password`, data, headerAuthApi);
  },
  forgotPassword(data) {
    return axios.post(`${baseApiAuthUrl}/forgot-password`, data);
  },
  forgotPasswordCheckOtp(data) {
    return axios.post(`${baseApiAuthUrl}/forgot-password/check-otp`, data);
  },
  tokenValidate() {
    return axios.get(`${baseApiAuthUrl}/verify-token`, headerAuthApi);
  },
  logout() {
    return axios.get(`${baseApiAuthUrl}/logout`, headerAuthApi);
  },
};

export const accountApi = {
  deleteAccount() {
    return axios.get(`${baseApiAuthUrl}/delete-account`, headerAuthApi);
  },
  deleteAccountCheckOtp(data) {
    return axios.post(
      `${baseApiAuthUrl}/delete-account/check-otp`,
      data,
      headerAuthApi
    );
  },
};

export const postApi = {
  getPosts(params) {
    return axios.get(`${import.meta.env.VITE_BASE_API_URL}/post`, {
      params,
      ...headerAuthApi,
    });
  },
};
