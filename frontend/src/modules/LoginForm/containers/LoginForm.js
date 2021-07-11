import LoginForm from "../components/LoginForm";
import { withFormik } from "formik";
import validateForm from "utils/validate";

import axios from "core/axios";

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
        console.log(data);
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },

  displayName: "LoginForm",
})(LoginForm);
