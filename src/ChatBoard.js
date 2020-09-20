import React from "react";
import ChatMessage from "./ChatMessage";

function ChatBoard(props) {
  let messages = props.messages.map((message) => (
    <ChatMessage message={message} key={message.id} />
  ));
  return (
    <div className="chatBoardComponent">
      <h1>{props.currentUser}</h1>
      {messages}
    </div>
  );
}

export default ChatBoard;
