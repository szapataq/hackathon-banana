import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./mobileBar.scss";
import homeIcon from "../assets/icons/homeIcon.svg";
import homeIconActive from "../assets/icons/homeIcon-active.svg";
import communityIcon from "../assets/icons/communityIcon.svg";
import communityIconActive from "../assets/icons/communityIcon-active.svg";
import trainingsIcon from "../assets/icons/trainingsIcon.svg";
import trainingsIconActive from "../assets/icons/trainingsIcon-active.svg";
import chatIcon from "../assets/icons/chatIcon.svg";
import chatIconActive from "../assets/icons/chatIcon-active.svg";
import profileIcon from "../assets/icons/profileIcon.svg";
import profileIconActive from "../assets/icons/profileIcon-active.svg";

function MobileBar({ match }) {
  const ispathHome = match.path === "/home";
  const ispathCommunity = match.path.includes("/community");
  const ispathTrainings = match.path.includes("/trainings");
  const ispathChat = match.path.includes("/chat");
  const ispathProfile = match.path === "/profile";

  return (
    <ul className="nav ">
      <li className="nav-item">
        <Link className="nav-link" to="/home">
          {ispathHome ? (
            <img src={homeIconActive} alt="icono" className="icon" />
          ) : (
            <img src={homeIcon} alt="icono" className="icon" />
          )}
          Inicio
        </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/community">
          {ispathCommunity ? (
            <img src={communityIconActive} alt="icono" className="icon" />
          ) : (
            <img src={communityIcon} alt="icono" className="icon" />
          )}
          Comunidad
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/trainings">
          {ispathTrainings ? (
            <img src={trainingsIconActive} alt="icono" className="icon" />
          ) : (
            <img src={trainingsIcon} alt="icono" className="icon" />
          )}
          Capacitaciones
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/chat">
          {ispathChat ? (
            <img src={chatIconActive} alt="icono" className="icon" />
          ) : (
            <img src={chatIcon} alt="icono" className="icon" />
          )}
          Chat
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">
          {ispathProfile ? (
            <img src={profileIconActive} alt="icono" className="icon" />
          ) : (
            <img src={profileIcon} alt="icono" className="icon" />
          )}
          Perfil
        </Link>
      </li>
    </ul>
  );
}

export default withRouter(MobileBar);
