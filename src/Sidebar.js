import React from "react";
import { useHistory } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";

function Sidebar(props) {
  let history = useHistory();
  let connectionList = props.connections.map((connection) => (
    <li
      key={connection.id}
      onClick={() => {
        if (props.isMobile) {
          history.push("/chatBoard");
        }

        props.onClick(connection.id);
      }}
    >
      <div className="profileImg"></div>
      <div className="profileName">{connection.name}</div>
    </li>
  ));
  return (
    <div className="sidebarComponent">
      <SidebarHeader />
      <ul>{connectionList}</ul>
    </div>
  );
}

export default Sidebar;
