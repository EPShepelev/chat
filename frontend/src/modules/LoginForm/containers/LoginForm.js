import { withFormik } from "formik";
import axios from "core/axios";

import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";
import { openNotification } from "/utils/helpers";

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

  handleSubmit: (values, { setSubmitting, setStatus }) => {
    return axios
      .post("/user/login", values)
      .then(({ data }) => {
        const { status, token } = data;
        if (status === "error") {
          openNotification({
            text: "Неверный логин или пароль",
          });
        }
        setStatus(data.status);
        localStorage.token = data.token;
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },

  displayName: "LoginForm",
})(LoginForm);
