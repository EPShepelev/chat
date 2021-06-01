import mongoose, { Schema, Document } from "mongoose";
import { isEmail } from "validator";

export interface IDialog extends Document {
  text: {
    type: String;
    require: boolean;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: String;
    require: true;
  };
  unread: boolean;
}

const DialogSchema = new Schema(
  {
    text: { type: String, require: Boolean },
    unread: { type: Boolean },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Dialog" },
  },
  {
    timestamps: true,
  }
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel;
