import React from "react";

function ChatMessage(props) {
  return (
    <div className={props.currentUser ? "currentUser" : "foreignUser"}>
      <p>{props.message.text}</p>
    </div>
  );
}

export default ChatMessage;
