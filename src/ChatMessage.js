import React from "react";

function ChatMessage(props) {
  return <div className="message">{props.message.text}</div>;
}

export default ChatMessage;
