import React from "react";
import { Block, Result } from "antd";

const { Title } = Typography;

const CheckEmailInfo = () => {
  return (
    <div>
    <Block>
    <Result status="success" title="Готово!" subTitle="Регистрация прошла успешно. Ссылка для подтверждения регистрации отправлена на e-mail" />
    </Block>
  </div>;
  );
};

export default CheckEmailInfo;


