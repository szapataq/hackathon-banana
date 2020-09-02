import React from 'react'
// import training from '../assets/icons/training.svg';
import nextIcon from '../assets/icons/nextIcon.svg';
import '../components/cardTraining.scss';

const CardTraining = (props) => {
    return (
        <div className="card-container">
          <div className="rounded-circle main-img"><img src={props.imgURL} alt=""/></div>
          <div className="container-text">
            <p>{props.title}</p>
            <span>{props.time}</span>
          </div>
          <img src={nextIcon} alt="next" className="next-icon"/>
        </div>
    )
}

export default CardTraining
