import { connect } from "react-redux";
import { withFormik } from "formik";

import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";
import { openNotification } from "/utils/helpers";
import { userActions } from "redux/actions";

const LoginFormConnected = connect((state) => state, userActions)(LoginForm);

const LoginFormContainer = withFormik({
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
    fetchUserLogin(values);
  },

  displayName: "LoginForm",
})(LoginFormConnected);

export default LoginFormContainer;
