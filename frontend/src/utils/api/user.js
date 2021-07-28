import { axios } from "core";

export default {
  login: (postData) => axios.post("./user/signin", postData),
  register: (postData) => axios.post("./user/signup", postData),
  getMe: () => axios.get("./user/me"),
};
