import { withFormik } from "formik";
import axios from "core/axios";

import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";

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
