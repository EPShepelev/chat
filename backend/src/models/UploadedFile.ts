import mongoose, { Schema, Document } from "mongoose";

export interface IUploadFile extends Document {
  filename: string;
  size: number;
  url: string;
  ext: string;
  message: string;
  user: string;
}

const UploadFileSchema = new Schema(
  {
    filename: String,
    size: Number,
    url: String,
    ext: String,
    message: { type: Schema.Types.ObjectId, ref: "Message", require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
  }
);

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
