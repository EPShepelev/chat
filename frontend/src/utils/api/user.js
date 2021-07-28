import { axios } from "core";

export default {
  login: (postData) => axios.post("./user/login", postData),
  register: (postData) => axios.post("./user/signup", postData),
  getMe: () => axios.get("./user/me"),
};
