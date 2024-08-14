import axios from "axios";
import headerAuthApi from "./headerAuthApi";

const baseApiAuthUrl = `${import.meta.env.VITE_BASE_API_URL}/v1/posts`;

export const postApi = {
  getPosts(params) {
    return axios.get(`${baseApiAuthUrl}`, {
      params,
      ...headerAuthApi,
    });
  },
  upImage(data) {
    return axios.post(`${baseApiAuthUrl}/images`, data, headerAuthApi);
  },
  upPost(data) {
    return axios.post(`${baseApiAuthUrl}`, data, headerAuthApi);
  },
};
