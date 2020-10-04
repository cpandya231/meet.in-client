import React from "react";

function ChatMessage(props) {
  let className = props.fromCurrentUser ? "currentUser" : "foreignUser";
  return <div className={className}>{props.message.text}</div>;
}

export default ChatMessage;
