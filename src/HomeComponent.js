import React from "react";
import { useHistory } from "react-router-dom";

function HomeComponent(props) {
  let history = useHistory();
  let users = props.users.map((user) => (
    <div
      key={user.id}
      className="user"
      onClick={() => {
        if (props.isMobile) {
          history.push("/sidebar");
        } else {
          history.push("/dashboard");
        }

        props.selectUser(user.id);
      }}
    >
      {user.name}
    </div>
  ));
  return (
    <div className="homeComponent">
      <h1>Continue as:</h1>
      {users}
    </div>
  );
}

export default HomeComponent;
