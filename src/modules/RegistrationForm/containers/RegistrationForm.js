import RegistrationForm from "../components/RegistrationForm";
import { withFormik } from "formik";

export default withFormik({
  mapPropsToValues: () => ({ email: "default e-mail" }),
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "RegistrationForm",
})(RegistrationForm);
