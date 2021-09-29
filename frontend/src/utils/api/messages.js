import { axios } from "core";

export default {
  getAllByDialogId: (id) => axios.get("./messages?dialog=" + id),
  removeById: (id) => axios.delete("./messages/=" + id),
  send: (text, dialogId) =>
    axios.post("./messages?dialog=", {
      text: text,
      dialog_id: dialogId,
    }),
};
