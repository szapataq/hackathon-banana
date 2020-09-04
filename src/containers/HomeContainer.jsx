import React from 'react'
import statistics from '../assets/icons/statistics.svg'
import alarmaIcon from '../assets/icons/alarmaIcon.svg'
import avisoIcon from '../assets/icons/avisoIcon.svg'
import HeaderComponent from '../components/HeaderComponent'
import CardHome from '../components/CardHome'
import {auth} from '../firebase';
import './homeContainer.scss';



function HomeContainer() {
  console.log(auth.currentUser);

  return (
    <div>
      <HeaderComponent className='header-container' isHome />
      <div className="container-card-home">
        <CardHome className='content-card card-home' title='Progreso' porcentaje='70%' description='mas emprendedores visualizaron tu perfil esta última semana' iconCard={statistics} />
        <CardHome className="card-home" title='Tus pagos' description='El 28 de Setiembre vence la 5ta cuota de tu microcredito. No olvides coordinarlo con tu equipo.' iconCard={alarmaIcon} />
        <CardHome className="card-home" title='Avisos' description='El 11 de Setiembre hay una nueva capacitación que podría ser de tu interés!' iconCard={avisoIcon} />
      </div>
      
    </div>
  )
}

export default HomeContainer
