import mongoose, { Schema, Document } from "mongoose";
import { isEmail } from "validator";

export interface IMessage extends Document {
  text: {
    type: String;
    require: boolean;
  };
  dialog: {
    type: Schema.Types.ObjectId;
    ref: String;
    require: true;
  };
  unread: {
    type: boolean;
    default: boolean;
  };
}

const MessageSchema = new Schema(
  {
    text: { type: String, require: Boolean },
    dialog: { type: Schema.Types.ObjectId, ref: "Dialog", require: true },
    user: { type: Schema.Types.ObjectId, require: true },
    unread: {
      type: boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
