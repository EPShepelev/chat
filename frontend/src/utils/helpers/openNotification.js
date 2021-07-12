import { notification } from "antd";

export default (title, text, type="info") => {
  notification.open({
    message: title,
    description:
    text,
}