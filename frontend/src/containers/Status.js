import React from "react";
import { Status as StatusBase } from "components";
import { connect } from "react-redux";

const Status = ({ currentDialogId, items }) => {
  const currentDialogObj = items.filter(
    (dialog) => dialog._id === currentDialogId
  )[0];
  return <StatusBase online={online} />;
};

export default connect(({ dialogs, user }) => ({
  dialogs,
  user: user.data,
}))(Status);
