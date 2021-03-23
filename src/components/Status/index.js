import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Status = ({ online }) => (
  <span className={classNames("status", { online: "status--online" })}>
    {online ? "онлайн" : "офлайн"}
  </span>
);

Status.propTypes = {
  online: PropTypes.string,
};

export default Status;
