import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './formLogin.scss'
import emailIcon from '../assets/icons/emailIcon.svg'
import passwordIcon from '../assets/icons/passwordIcon.svg'

function Form() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }

  // console.log(email, password);

  return (
    <form className='form-login'>
      <div className='email-content'>
        <img src={emailIcon} className='email-content-icon' />
        <input type="text" placeholder='Correo electrónico' onChange={handleEmail} value={email} />
      </div>
      <div className='password-content'>
        <img src={passwordIcon} className='password-content-icon' />
        <input type="text" placeholder='Correo electrónico' onChange={handlePassword} value={password} />
      </div>
      <Link to='' >¿Olvidaste la contraseña?</Link>
    </form>
  )
}

export default Form
