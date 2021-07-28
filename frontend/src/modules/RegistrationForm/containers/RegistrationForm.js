import { withFormik } from "formik";
import RegistrationForm from "../components/RegistrationForm";

import { userActions } from "redux/actions";
import validateForm from "utils/validate";

import store from "redux/store";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    password2: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    store.dispatch(
      userActions(fetchUserRegister(values))
        .then(({ status }) => {
          if (status === "success") {
            setTimeout(() => {
              props.history.push("/");
            }, 500);
          }
          setSubmitting(false);
        })
        .catch(() => {
          setSubmitting(false);
        })
    );
  },

  displayName: "RegistrationForm",
})(RegistrationForm);
