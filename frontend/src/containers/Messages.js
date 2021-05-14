import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Messages as BaseMessages } from "components";
import { messagesActions } from "redux/actions";

class Dialogs extends React.Component {
  componentDidUpdate(prevProps) {
    const { fetchMessages, currentDialogId } = this.props;
    if (prevProps.currentDialogId !== this.props.currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }

  render() {
    const { items } = this.props;
    return <BaseMessages items={items} />;
  }
}

// const Dialogs = ({ currentDialogId, fetchMessages, items }) => {
//   useEffect(() => {
//     fetchMessages(currentDialogId);
//   }, [currentDialogId]);

//   return <BaseMessages items={items} />;
// };

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.item,
  }),
  messagesActions
)(Dialogs);
