import React from "react";
import classNames from "classnames";
import "./Dialogs.scss";

const Dialogs = ({ user, message, isMe, isRead }) => 
  <div className="dialogs">
      <DialogItem user={{
        fullname: "усатый прибалт"
        isOnline: false
      }} isRead={999}/>
      <DialogItem user={{
        fullname: "усатый прибалт"
        isOnline: true
      }} isRead={0}/>
      <DialogItem user={{
        fullname: "усатый прибалт"
        isOnline: false
      }} isRead={5}/>
    </div>;


export default Dialogs;
