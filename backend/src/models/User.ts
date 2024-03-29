import mongoose, { Schema, Document } from "mongoose";
import { isEmail } from "validator";
import { generatePasswordHash } from "../utils";
import differenceInMinutes from "date-fns/differenceInMinutes";

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

UserSchema.virtual("isOnline").get(function (this: any) {
  return differenceInMinutes(new Date.toISOString(), this.last_seen) < 5;
});

UserSchema.set("toJSON", {
  virtuals: true,
});

UserSchema.pre("save", function (next) {
  const user: IUser = this;
  if (!user.isModified("password")) return next();

  generatePasswordHash(user.password)
    .then((hash) => {
      user.password = String(hash);
      generatePasswordHash(+new Date()).then((confirmHash) => {
        user.confirm_hash = String(confirmHash);
        next();
      });
    })
    .catch((err) => {
      next(err);
    });
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
