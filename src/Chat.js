import React from "react";

function Chat(props) {
  return (
    <div className="chatComponent">
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          id="chatBox"
          name="chatBox"
          placeholder="Type a message"
        ></input>
        <input type="submit" id="submitButton" value=""></input>
      </form>
    </div>
  );
}

export default Chat;
