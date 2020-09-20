import React from "react";
import { useHistory } from "react-router-dom";

function Sidebar(props) {
  let history = useHistory();
  let connectionList = props.connections.map((connection) => (
    <li key={connection.id}>
      <div className="profileImg"></div>
      <div
        className="profileName"
        onClick={() => {
          history.push("/chatBoard");
          props.onClick(connection.id);
        }}
      >
        {connection.name}
      </div>
    </li>
  ));
  return (
    <div className="sidebarComponent">
      <h2>Connections</h2>
      <ul>{connectionList}</ul>
    </div>
  );
}

export default Sidebar;
