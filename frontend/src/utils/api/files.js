import { axios } from "core";

export default {
  upload: (file) => {
    const FormData = new FormData();
    FormData.append("image", file);
    axios.post("upload_file", FormData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  },
};
