import { axios } from "core";

export default {
  upload: (file) => axios.post("./files"),
};
