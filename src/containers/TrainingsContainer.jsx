import React from 'react';
// import Header from '../components/Header'
import HeaderComponent from '../components/HeaderComponent';
import logo from '../assets/icons/logo.svg';
import './trainingsContainer.scss';
import CardTraining from '../components/CardTraining';


function TrainingsContainer() {
  return (
    <div>
      <HeaderComponent imageIcon={logo} titleHeader='Capacitaciones'>
      </HeaderComponent>
      <div className="container-training">
        <CardTraining/>
      </div>
    </div>
  )
}

export default TrainingsContainer;
