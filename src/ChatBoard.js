import React from "react";
import ChatMessage from "./ChatMessage";

function ChatBoard(props) {
  let messages = props.messages.map((message) => (
    <li key={message.id} className="message">
      <div
        className={
          props.currentUser === message.from
            ? "message-wrapper"
            : "message-wrapper-left"
        }
      >
        <ChatMessage
          message={message}
          currentUser={props.currentUser === message.from}
        />
        <div
          className={
            props.currentUser === message.from
              ? "triangle-left"
              : "triangle-right"
          }
        ></div>
       
      </div>
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
