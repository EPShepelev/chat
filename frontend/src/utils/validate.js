export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Введите email";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Некорректный email";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль!";
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = "Слишком простой пароль";
      }
    },
    password_2: (value) => {
      if (!isAuth && value !== value.password) {
        errors.password_2 = "Пароли не совпадают";
      } 
    },
    full_name: (value) => {
      if (!isAuth && !value) {
        errors.full_name = "Укажите свое имя";
        } 
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
