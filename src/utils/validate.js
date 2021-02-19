export default ({ isAuth, values, errors }) => {

  const rules = {
    if (!value) {
      errors.email = "Введите email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors.email = "Некорректный email";
    }
  },
  password: (errors, value) => {
    if (!value) {
      errors.password = "Введите пароль!";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
      errors.password = isAuth
        ? "Неверный пароль"
        : "Пароль должен содержать заглавные буквы и цифры";
    }
  }

  Object.keys(values).forEach(
    (key) => rules[key] && rules[key](errors, values[key])
  );

  
}
