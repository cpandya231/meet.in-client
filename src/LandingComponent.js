import React from "react";
import { useHistory } from "react-router-dom";

function LandingComponent(props) {
  let history = useHistory();
  setTimeout(() => {
    history.push("/home");
  }, 2000);
  return (
    <div className="landingComponent">
      <img src={require("./assets/logo.png")} alt="app-logo"></img>
    </div>
  );
}

export default LandingComponent;
