import React from "react";
import { Status as StatusBase } from "components";
import { connect } from "react-redux";

const Status = ({ currentDialogId, items }) => {
  const currentDialogObj = items.filter();
  return <StatusBase online={online} />;
};

export default connect(({ dialogs }) => dialogs)(Status);
