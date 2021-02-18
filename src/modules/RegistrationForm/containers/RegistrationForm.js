import RegistrationForm from "../components/RegistrationForm";
import { withFormik } from "formik";
import validate from "utils/validate";

export default withFormik({
  validate: (values) => {
    let errors = {};
    const keys = Object.keys(values);
    keys.forEach((key) => validate[key] && validate[key](errors, values));

    if (!values.email) {
      errors.email = "Введите email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Введите пароль!";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)
    ) {
      errors.password = "Пароль должен содержать заглавные буквы и цифры";
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
