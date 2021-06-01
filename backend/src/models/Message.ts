import mongoose, { Schema, Document } from "mongoose";
import { isEmail } from "validator";

export interface IDialog extends Document {
  text: {
    type: String;
    require: true;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: String;
    require: true;
  };
  unread: Boolean;
}

const DialogSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    partner: { type: Schema.Types.ObjectId, ref: "User" },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
  },
  {
    timestamps: true,
  }
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel;
