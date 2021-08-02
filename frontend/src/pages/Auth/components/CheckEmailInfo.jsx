import React, { useEffect, useState } from "react";
import { Block, Result } from "antd";

import { userApi } from "utils/api";

const CheckEmailInfo = ({ location }) => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    hash = location.search.split("hash=")[1];
    if (hash) {
      userApi.verifyHash(hash);
    }
  });

  return (
    <div>
      <Block>
        <Result
          status="success"
          title="Готово!"
          subTitle={
            <p>
              "Регистрация прошла успешно! <br /> Ссылка для подтверждения
              регистрации отправлена на e-mail"
            </p>
          }
        />
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
