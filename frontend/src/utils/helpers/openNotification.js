import { notification } from "antd";

export default ({title, text, type="info", duration = 2}) => {
  notification.open({
    message: title,
    description:
    text,
    duration: duration
}