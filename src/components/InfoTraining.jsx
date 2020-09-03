import React from 'react'
import Button from './Button'
import logo from '../assets/icons/logo.svg';
import HeaderComponent from './HeaderComponent'


function InfoTraining() {
  return (
    <>
      <HeaderComponent imageIcon={logo} titleHeader='Capacitaciones' />
      <div>
        aqui va la informacion de las capacitaciones
      <Button className='btn-zoom'>
          Unirme al zoom
      </Button>
      </div>
    </>
  )
}

export default InfoTraining
