import mongoose, { Schema, Document } from "mongoose";

export interface IUploadFile extends Document {
  filename: string;
  size: number;
  url: string;
  ext: string;
  message: string;
  user: string;
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
