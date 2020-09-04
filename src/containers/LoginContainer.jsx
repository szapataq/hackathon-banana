import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import FormLogin from '../components/FormLogin'
import Button from "../components/Button";
import logo from "../assets/icons/logo.svg";
import emailIcon from "../assets/icons/emailIcon.svg";
import passwordIcon from "../assets/icons/passwordIcon.svg";
import { login } from "../API/auth";

function LoginContainer() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleForm(e) {
    e.preventDefault();
    login(email, password).then(() => {
      // console.log(history)
      history.push("/home");
    });
  }

  return (
    <>
      <div>
        <img src={logo} alt="" />
        <h1>BANANA</h1>
        <span>Emprendiendo juntos</span>
      </div>
      <form className="form-login">
        <div className="email-content">
          <img src={emailIcon} className="email-content-icon" alt="" />
          <input
            type="email"
            placeholder="Correo electrónico"
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className="password-content">
          <img src={passwordIcon} className="password-content-icon" alt="" />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <p>chompas-lucy@gmail.com chompaslucy</p>
        <Link to="">¿Olvidaste la contraseña?</Link>
        <Button className="bt-login" onClick={handleForm}>
          Inicia Sesión
        </Button>
      </form>
    </>
  );
}

export default LoginContainer;
