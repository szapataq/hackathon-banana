import React from 'react'
import Form from '../components/Form'
import logo from '../assets/icons/logo.svg'

function LoginContainer() {
  return (
    <>
      <div>
        <img src={logo} alt="" />
        <h1>BANANA</h1>
        <span>Emprendiendo juntos</span>
      </div>
      <Form></Form>
    </>
  )
}

export default LoginContainer
