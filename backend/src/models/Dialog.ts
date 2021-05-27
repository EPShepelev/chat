import mongoose, { Schema, Document } from "mongoose";
import { isEmail } from "validator";

export interface IDialog extends Document {
  email: string;
  fullname: string;
  password: string;
  confirmed: boolean;
  avatar: string;
  confirm_hash: string;
  last_seen: Date;
}

const DialogSchema = new Schema({
  author: String,
  partner: String,
  text: String,
  dialog: String,
  unread: Boolean,
});

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel;
