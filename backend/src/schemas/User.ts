import mongoose, { Schema } from "mongoose";
import { isEmail } from "validator";

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
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
