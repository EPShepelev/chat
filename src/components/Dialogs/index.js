import React from "react";
import classNames from "classnames";
import "./Dialogs.scss";

const Dialogs = ({ user, message, unread }) => 
  <div className="dialogs">
      <DialogItem user={{
        fullname: "усатый прибалт"
        isOnline: false
      }} unread={999}/>
      <DialogItem user={{
        fullname: "усатый прибалт"
        isOnline: true
      }} unread={0}/>
      <DialogItem user={{
        fullname: "усатый прибалт"
        isOnline: false
      }} unread={5}/>
    </div>;


export default Dialogs;
