import React from "react";
import { Status as StatusBase } from "components";
import { connect } from "react-redux";

const Status = ({ currentDialogId, user, items }) => {
  const currentDialogObj = items.filter(
    (dialog) => dialog._id === currentDialogId
  )[0];
  let online = false;
  if (dialog.author._id === user._id) {
    online = dialog.partner.isOnline;
  }
  return <StatusBase online={online} />;
};

export default connect(({ dialogs, user }) => ({
  dialogs,
  user: user.data,
}))(Status);
