import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import FormLogin from '../components/FormLogin'
import Button from '../components/Button'
import logo from '../assets/icons/logo.svg'
import emailIcon from '../assets/icons/emailIcon.svg'
import passwordIcon from '../assets/icons/passwordIcon.svg'
import { login } from '../API/auth';
import './loginContainer.scss';

function LoginContainer() {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // 
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleForm(e) {
    e.preventDefault()
    login(email, password).then(() => {
      // console.log(history)
      history.push('/home')

    })

  }


  return (
    <div className="container-login">
      <div className="container-title">
        <img src={logo} alt="banana" />
        <h1>BANANA</h1>
        <span>Emprendiendo juntos</span>
      </div>
      <form className='form-login'>
        <div className='email-content comun'>
          <img src={emailIcon} className='icon-input' alt="email"/>
          <input type="email" placeholder='Correo electrónico' onChange={handleEmail} value={email} />
        </div>
        <div className='password-content comun'>
          <img src={passwordIcon} className='icon-input' alt="password" />
          <input type="password" placeholder='Contraseña' onChange={handlePassword} value={password} />
        </div>
        <div className="link-olv"><Link to='' className="link">¿Olvidaste la contraseña?</Link></div>
        <div className="container-button"><Button className="bt-login" onClick={handleForm}>Inicia Sesión</Button></div>
      </form>
    </div>
  )
}

export default LoginContainer
