import { connect } from "react-redux";
import { withFormik } from "formik";

import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";
import { openNotification } from "/utils/helpers";
import { userActions } from "redux/actions";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    return axios
      .post("/user/login", values)
      .then(({ data }) => {
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
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },

  displayName: "LoginForm",
})(LoginForm);
