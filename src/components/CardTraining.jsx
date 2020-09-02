import React from 'react'
import training from '../assets/icons/training.svg';
import nextIcon from '../assets/icons/nextIcon.svg';
import '../components/cardTraining.scss';

const CardTraining = () => {
    return (
        <div className="card-container">
          <div className="rounded-circle main-img"><img src={training} alt=""/></div>
          <div className="container-text">
            <p>Aprende a usar chat emprendedor</p>
            <span>Viernes 11/09</span>
          </div>
          <img src={nextIcon} alt="next" className="next-icon"/>
        </div>
    )
}

export default CardTraining
