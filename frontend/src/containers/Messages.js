import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Messages as BaseMessages } from "components";
import { messagesActions } from "redux/actions";
import socket from "core/socket";

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = useRef(null);
  const onNewMessage = () => {
    fetchMessages(currentDialogId);
  };

  useEffect(() => {
    if (currentDialogId) {
     
    }
    socket.on("SERVER:NEW_MESSAGE", onNewMessage);
    return () => {
     
    };
  }, [currentDialogId]);


  
};

class Dialogs extends React.Component {
  render() {
    const { currentDialogId, fetchMessages, items, isLoading } = this.props;
  }

  onNewMessage = () => {
   
  }

  componentDidUpdate(prevProps) {
    if(this.props.items.length !== prevProps.items.length ){
      this.messagesRef.scrollTo(0, 99999);
    }
    if(this.props.currentDialogId !== prevProps.currentDialogId){
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:NEW_MESSAGE", this.onNewMessage)
  }

  componentWillUnmount(){
    socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
  }
  
  return (
    <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />
  );
}

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.item,
    isLoading: messages.isLoading,
  }),
  messagesActions
)(Dialogs);
