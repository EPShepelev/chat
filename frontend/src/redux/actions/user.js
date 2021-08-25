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
    return userApi
      .signin(postData)
      .then(({ data }) => {
        const { status, token } = data;
        openNotification({
          title: "Отлично!",
          text: "Успех авторизации",
          type: "success",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
        return data;
      })
      .catch((response) => {
        if (response.status === 403) {
          openNotification({
            title: "Ошибка при авторизации",
            text: "Неверный логин или пароль",
            type: "error",
          });
        }
      });
  },
  fetchUserRegister: (postData) => (dispatch) => {
    return userApi.signup(postData).then(({ data }) => {
      const { status, token } = data;

      return data;
    });
  },
};

export default Actions;
