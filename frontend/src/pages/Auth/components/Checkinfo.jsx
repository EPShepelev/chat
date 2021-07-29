import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const CheckEmailInfo = () => {
  return (
    <div>
      <Title level={2}>Готово!</Title>
      <p>
        Регистрация прошла успешно. Ссылка для подтверждения регистрации
        отправлена на e-mail
      </p>
    </div>
  );
};

export default CheckEmailInfo;
