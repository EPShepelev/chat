import React from "react";
import { Result } from "antd";

const { Title } = Typography;

const CheckEmailInfo = () => {
  return (
    <div>
    <Block>
    <Result status="success" title="Готово!" subTitle="Регистрация прошла ус" />
    </Block>
  </div>;
  );
};

export default CheckEmailInfo;


