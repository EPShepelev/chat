const validate = {
  email: (errors, value) => {
    if (!value) {
      errors.email = "Введите email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors.email = "Некорректный email";
    }
  },
};

export default validate;
