import React from 'react'
import FormLogin from '../components/FormLogin'
import Button from '../components/Button'
import logo from '../assets/icons/logo.svg'

function LoginContainer() {


  return (
    <>
      <div>
        <img src={logo} alt="" />
        <h1>BANANA</h1>
        <span>Emprendiendo juntos</span>
      </div>
      <FormLogin></FormLogin>
      <Button className="bt-login">Inicia Sesión</Button>
    </>
  )
}

export default LoginContainer
