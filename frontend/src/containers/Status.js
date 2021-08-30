import React from "react";
import { Status as StatusBase } from "components";
import { connect } from "react-redux";

const Status = ({ currentDialogId, user, dialogs }) => {
  if(!dialogs.length){
    return
  }
  const currentDialogObj = items.filter(
    (dialog) => dialog._id === currentDialogId
  )[0];
  let partner = {};
  if currentDialogObj.author._id === user._id) {
    partner = currentDialogObj.partner;
  } else {
    partner = currentDialogObj.author;
  }
  return <StatusBase online={partner.isOnline} fullname = {partner.fullname}/>;
};

export default connect(({ dialogs, user }) => ({
  dialogs: dialogs.item,
  user: user.data,
}))(Status);
