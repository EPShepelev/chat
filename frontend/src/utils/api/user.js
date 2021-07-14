import { axios } from "core";

export default {
  login: (postData) => axios.get("./user/login", postData),
};
