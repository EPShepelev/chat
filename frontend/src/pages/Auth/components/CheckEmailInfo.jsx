import React, {useContext} from "react";
import { Block, Result } from "antd";

const CheckEmailInfo = ({location}) => {
useEffect(() => {
    hash = location.search.split("hash=")[1];
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
