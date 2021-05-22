import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: "String",
      require: true,
    },
    avatar: String,
    fullname: {
      type: "String",
      require: true,
    },
    password: {
      type: "String",
      require: true,
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

const User = mongoose.model("User", UserSchema);

export default User;
