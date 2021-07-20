import { connect } from "react-redux";
import { withFormik } from "formik";
import { withRouter } from "react-router";

import LoginForm from "../components/LoginForm";
import validateForm from "utils/validate";
import { openNotification } from "/utils/helpers";

import { userActions } from "redux/actions";

import store from "redux/store";

const LoginFormRouter = withRouter(LoginForm);

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

  handleSubmit: (values, props) => {
    const { setSubmitting } = props;
    store.dispatch(
      userActions(fetchUserLogin(values)).then(() => {
        setSubmitting(false);
      })
    );
  },

  displayName: "LoginForm",
})(LoginFormRouter);

export default LoginFormContainer;
