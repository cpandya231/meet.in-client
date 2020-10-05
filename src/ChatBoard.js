import React from "react";
import ChatMessage from "./ChatMessage";

function ChatBoard(props) {
  let messages = props.messages.map((message) => (
    <li
      key={message.id}
      className={
        props.currentUser === message.from ? "currentUser" : "foreignUser"
      }
    >
      <ChatMessage message={message} />
    </li>
  ));
  return (
    <div className="chatBoardComponent">
      <h1>{props.currentConnection}</h1>
      <ul id="chat"> {messages}</ul>
    </div>
  );
}

export default ChatBoard;
