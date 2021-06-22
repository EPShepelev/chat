import bcrypt from "bcrypt";

export default (password: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(function (err, salt) {
      if (err) return reject(err);

      bcrypt.hash(password, salt, function (err, hash: string) {
        if (err) return reject(err);
        resolve(hash);
      });
    });
  });
};
