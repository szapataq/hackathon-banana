import React from 'react';
import Header from '../components/Header';
import './trainingsContainer.scss';
import chatIcon from '../assets/training.svg';

function TrainingsContainer() {
  return (
    <>
      <Header/>
      <div class="container-training">
        <div className="card-container">
          <img src={chatIcon} alt=""/>
          <div>
            <p>Aprende a usar chat emprendedor</p>
            <spam>Viernes 11/09</spam>
          </div>
          <img src="" alt=""/>
        </div>
      </div>
    </>
  )
}

export default TrainingsContainer;
