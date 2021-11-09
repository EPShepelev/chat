import { axios } from "core";

export default {
  upload: (file) => {
    const FormData = new FormData();
    FormData.append("image", file);
    axios.post("/files", FormData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  },
};
