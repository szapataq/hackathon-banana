import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./headerComponent.scss";
import logo from "../assets/icons/logo.svg";
import backIcon from "../assets/icons/backIcon.svg";
import notificationMessage from "../assets/icons/ notificationMessage.svg";
import { getInfoUser } from "../API/chat";
import { auth } from "../firebase";

function HeaderComponent({ isHome, imageIcon, titleHeader, ...rest }) {
  const [userCurrent, setUserCurrent] = useState([]);
  let history = useHistory();

  const user = auth.currentUser.uid;
  useEffect(() => {
    getInfoUser(user).then((c) => setUserCurrent(c));
  }, [user]);

  function goBack(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <div {...rest}>
      {isHome ? (
        <div className=".header-container">
          <p className="header-container-title">BANANA</p>
          <img
            src={logo}
            alt="icono del logo"
            className="header-container-logo"
          />
          <p className="header-container-welcome">
            ¡Bienvenidx, {userCurrent.nameCompany}!
          </p>
          <div className="header-container-div">
            <img
              src={notificationMessage}
              alt="icon message"
              className="header-container-div-iconMesagge"
            />
            <p className="header-container-div-textNotification">
              Tienes 1 mensaje nuevo
            </p>
          </div>
        </div>
      ) : (
        <div className="header">
          <button className="header-back" onClick={goBack}>
            <img src={backIcon} alt="icon go back" />
          </button>
          <img src={imageIcon} alt="icon message" className="header-logo" />
          <p className="header-title">{titleHeader}</p>
        </div>
      )}
    </div>
  );
}

export default HeaderComponent;
