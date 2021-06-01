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
  unread: boolean;
}

const MessageSchema = new Schema(
  {
    text: { type: String, require: Boolean },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Dialog" },
    unread: Boolean,
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
