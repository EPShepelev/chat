import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Status.scss";

const Status = ({ online }) => (
  <div className="chat__dialog-header-center">
    <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
    <div className="chat__dialog-header-status">
      <Status online />
    </div>
  </div>
);

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;
