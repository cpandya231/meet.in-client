import React from "react";
import ChatBoard from "./ChatBoard";
import Chat from "./Chat";

function Actionbar(props) {
  let filteredMessages = props.currentUser.chatMessages.filter((msg) => {
    return (
      (msg.to === props.currentUser.id || msg.from === props.currentUser.id) &&
      (msg.to === props.currentUser.currentConnection.id ||
        msg.from === props.currentUser.currentConnection.id)
    );
  });
  return (
    <div className="actionbarComponent">
      <ChatBoard
        messages={filteredMessages}
        currentConnection={props.currentUser.currentConnection.name}
        currentUser={props.currentUser.id}
      />
      <Chat onSubmit={props.onSubmit} />
    </div>
  );
}

export default Actionbar;
