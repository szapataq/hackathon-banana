import React from 'react'
import { Link } from 'react-router-dom'
import './mobileBar.scss'
import homeIcon from '../assets/icons/homeIcon.svg'
import communityIcon from '../assets/icons/communityIcon.svg'
import trainingsIcon from '../assets/icons/trainingsIcon.svg'
import chatIcon from '../assets/icons/chatIcon.svg'
import profileIcon from '../assets/icons/profileIcon.svg'

function MobileBar() {
  //tabindex="-1" aria-disabled="true"
  return (
    <ul className="nav ">
      <li className="nav-item" >
        <Link className="nav-link" to='/home'>
          <img src={homeIcon} alt="icono" className='icon' />
          Inicio
        </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to='/community'>
          <img src={communityIcon} alt="icono home" className='icon' />
          Comunidad
          </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/trainings'>
          <img src={trainingsIcon} alt="icono home" className='icon' />
          Capacitaciones
          </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/chat' >
          <img src={chatIcon} alt="icono home" className='icon' />
          Chat
          </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/profile' >
          <img src={profileIcon} alt="icono home" className='icon' />
          Perfil
          </Link>
      </li>
    </ul>
  )
}

export default MobileBar
