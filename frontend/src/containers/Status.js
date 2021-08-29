import React from "react";
import { Status as StatusBase } from "components";
import { connect } from "react-redux";

const Status = ({ currentDialogId, user, items }) => {
  const currentDialogObj = items.filter(
    (dialog) => dialog._id === currentDialogId
  )[0];
  let partner = false;
  if currentDialogObj.author._id === user._id) {
    partner = currentDialogObj.partner;
  } else {
    partner = currentDialogObj.author;
  }
  return <StatusBase online={online} />;
};

export default connect(({ dialogs, user }) => ({
  dialogs,
  user: user.data,
}))(Status);
