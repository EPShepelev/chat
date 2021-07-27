import { userApi } from "utils/api";
import { openNotification } from "utils/helpers";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserData: () => (dispatch) => {
    userApi.getMe().then(({ data }) => {
      dispatch(Actions.setUserData(data));
    });
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.login(postData).then(({ data }) => {
      const { status, token } = data;
      if (status === "error") {
        openNotification({
          title: "Ошибка авторизации",
          text: "Неверный логин или пароль",
          type: "error",
        });
      } else {
        openNotification({
          title: "Отлично!",
          text: "Успех авторизации",
          type: "success",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
      }
      return data;
    });
  },
  fetchUserRegister: (postData) => (dispatch) => {
    return userApi.login(postData).then(({ data }) => {
      const { status, token } = data;
      if (status === "error") {
        openNotification({
          title: "Ошибка авторизации",
          text: "Неверный логин или пароль",
          type: "error",
        });
      } else {
        openNotification({
          title: "Отлично!",
          text: "Успех авторизации",
          type: "success",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
      }
      return data;
    });
  },
};

export default Actions;
