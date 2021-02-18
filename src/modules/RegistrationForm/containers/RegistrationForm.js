import RegistrationForm from "../components/RegistrationForm";
import { withFormik } from "formik";
import validate from "utils/validate";

export default withFormik({
  validate: (values) => {
    let errors = {};
    const keys = Object.keys(values);
    keys.forEach((key) => validate[key] && validate[key](errors, values[key]));

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
