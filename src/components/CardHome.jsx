import React from 'react'
import './cardHome.scss'

function CardHome({ title, porcentaje, description, iconCard, ...rest }) {
  return (
    <div {...rest}>
      <h1 className='card-title'>{title}</h1>
      <p className='card-description'>
        <span>{porcentaje}</span>
        {description}
      </p>
      <img src={iconCard} className='iconCard' />
    </div>
  )
}

export default CardHome
