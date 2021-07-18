import { connect } from "react-redux";
import { withFormik } from "formik";

import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";
import { openNotification } from "/utils/helpers";

import { userActions } from "redux/actions";
import store from "redux/store";

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
    store.dispatch(userActions(fetchUserLogin(values)));
  },

  displayName: "LoginForm",
})(LoginForm);

export default LoginFormContainer;
