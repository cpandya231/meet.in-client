import React from "react";
import ChatMessage from "./ChatMessage";

function ChatBoard(props) {
  let messages = props.messages.map((message) => (
    <li>
      <ChatMessage
        message={message}
        key={message.id}
        fromCurrentUser={props.currentUser == message.from}
      />
    </li>
  ));
  return (
    <div className="chatBoardComponent">
      <h1>{props.currentConnection}</h1>
      <ul> {messages}</ul>
    </div>
  );
}

export default ChatBoard;
