import React, { useEffect, useState } from "react";
import { Block, Result } from "antd";

import { userApi } from "utils/api";

const CheckEmailInfo = ({ location }) => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    hash = location.search.split("hash=")[1];
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true);
        }
      });
    }
  });

  return (
    <div>
      <Block>
        <Result
          status="success"
          title="Готово!"
          subTitle={
            !verified ? (
              <p>
                "Регистрация прошла успешно! <br /> Ссылка для подтверждения
                регистрации отправлена на e-mail"
              </p>
            ) : (
              <p>Аккаунт успешно подтвержден</p>
            )
          }
        />
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
