import { userApi } from "utils/api";

const actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
};

export default actions;
