import React from "react";

function SidebarHeader(props) {
  return (
    <div className="sidebarHeaderComponent">
      <div className="searchComponent">
        <h2>Let's Chat</h2>
        <input type="text" id="search-box"></input>
        <img src={require("./assets/search-btn.svg")} alt="search-btn"></img>
        <img src={require("./assets/more_vert.svg")} alt="search-btn"></img>
      </div>
      <div className="sidebarActionComponent">
        <a href="#" className="sidebarActionLinks active justify-left">
          Chats
        </a>
        <a href="#" className="sidebarActionLinks justify-center">
          Status
        </a>
        <a href="#" className="sidebarActionLinks justify-right">
          Calls
        </a>
      </div>
    </div>
  );
}

export default SidebarHeader;
