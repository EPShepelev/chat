import bcrypt from "bcrypt";

export default (password: string, handleError: any) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) return handleError(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return handleError(err);
        user.password = hash;
        next();
      });
    });
  });
};
