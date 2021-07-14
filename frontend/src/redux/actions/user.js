import { userApi } from "utils/api";

const actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.login(postData).then(({ data }) => {});
  },
};

export default actions;
