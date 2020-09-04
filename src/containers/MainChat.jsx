import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import MessageContainer from "../components/MessageContainer";
import lucy from "../assets/icons/lucy.png";

function MainChat() {
  return (
    <div>
      <HeaderComponent titleHeader="Chompas Lucy" imageIcon={lucy} />

      <MessageContainer />
    </div>
  );
}

export default MainChat;

// imageIcon={a} titleHeader={a}
