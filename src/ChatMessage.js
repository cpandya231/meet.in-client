import React from "react";

function ChatMessage(props) {
  return (
    <div className={props.currentUser ? "currentUser" : "foreignUser"}>
      <p>{props.message.text}</p>
      <div className="msg-date">
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
}

export default ChatMessage;
