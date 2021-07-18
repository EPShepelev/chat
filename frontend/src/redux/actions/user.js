import { userApi } from "utils/api";
import { openNotification } from "utils/helpers";

const Actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
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
      }
      dispatch(Actions.setUserData(data));
    });
  },
};

export default Actions;
