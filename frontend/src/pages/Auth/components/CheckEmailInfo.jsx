import React, { useEffect, useState } from "react";
import { Block, Result } from "antd";

import { userApi } from "utils/api";

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return "Аккаунт успешно подтвержден";
    } else {
      return "Ошибка при подтверждении аккаунта";
    }
  } else {
    return "Ссылка для подтверждения регистрации отправлена на e-mail";
  }
};

const CheckEmailInfo = ({ location }) => {
  const [verified, setVerified] = useState(false);
  const hash = location.search.split("hash=")[1];

  useEffect(() => {
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
          subTitle={renderTextInfo(hash, verified)}
        />
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
