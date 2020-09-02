import React from 'react'
import './headerComponent.scss'
import logo from '../assets/icons/logo.svg'
import backIcon from '../assets/icons/backIcon.svg'
import notificationMessage from '../assets/icons/ notificationMessage.svg'

function HeaderComponent({ isHome, imageIcon, titleHeader, ...rest }) {
  return (
    <div {...rest}>
      {
        isHome ?
          <div className='.header-container'>
            < p className='header-container-title'>BANANA</p>
            <img src={logo} alt="icono del logo" className='header-container-logo' />
            <p className='header-container-welcome'>¡Bienvenida Rosita!</p>
            <div className='header-container-div'>
              <img src={notificationMessage} alt="icon message" className='header-container-div-iconMesagge' />
              <p className='header-container-div-textNotification'>Tienes 1 mensaje nuevo</p>
            </div>
          </div>
          :
          <div className='header'>
            <button className='header-back'>
              <img src={backIcon} />
            </button>
            <img src={imageIcon} alt="icon message" className='header-logo' />
            <p className='header-title'>{titleHeader}</p>
          </div>
      }
    </div >
  )
}

export default HeaderComponent