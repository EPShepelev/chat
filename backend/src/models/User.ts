import mongoose, { Schema, Document } from "mongoose";
import { isEmail } from "validator";
import { verifyUserPassword } from "../utils";

export interface IUser extends Document {
  email?: string;
  fullname?: string;
  password?: string;
  confirmed?: boolean;
  avatar?: string;
  confirm_hash?: string;
  last_seen?: Date;
}

const UserSchema = new Schema(
  {
    email: {
      type: "String",
      require: "Email address is required",
      validate: [isEmail, "Invalid email"],
      unique: true,
    },
    avatar: String,
    fullname: {
      type: "String",
      require: "Full name is required",
    },
    password: {
      type: "String",
      require: "Password is required",
    },
    confirmed: {
      type: "Boolean",
      default: false,
    },
    confirm_hash: String,
    last_seen: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  const user: IUser = this;
  if (!user.isModified("password")) return next();
  verifyUserPassword(user.password)
    .then((hash) => {
      user.password = String(hash);
      next();
    })
    .catch((err) => {
      next(err);
    });
  // bcrypt.getSalt(function (err, salt) {
  //   if (err) return next(err);
  //   bcrypt.hash(user.password, salt, function (err, hash) {
  //     user.password = hash;
  //     next();
  //   });
  // });
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
