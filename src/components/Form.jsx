import React from 'react'
import './form.scss'
import emailIcon from '../assets/icons/emailIcon.svg'
import passwordIcon from '../assets/icons/passwordIcon.svg'

function Form() {
  return (
    <form className='form-login'>
      <div className='email-content'>
        <img src={emailIcon} className='email-content-icon' />
        <input type="text" placeholder='Correo electrónico' />
      </div>
      <div className='password-content'>
        <img src={passwordIcon} className='password-content-icon' />
        <input type="text" placeholder='Correo electrónico' />
      </div>
      <p>¿Olvidaste la contraseña?</p>
    </form>
  )
}

export default Form
