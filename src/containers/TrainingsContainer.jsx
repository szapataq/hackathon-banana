import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import logo from '../assets/icons/logo.svg';
import './trainingsContainer.scss';
import CardTraining from '../components/CardTraining';
import { firestore } from './../firebase';

function TrainingsContainer() {

  const [training, setTraining] = useState([]);

  useEffect(() => {
    const getDataTraining = async () => {
      try {
        const data = await firestore.collection('trainings').get();
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData);
        setTraining(arrayData);

      } catch (error) {

      }
    };
    getDataTraining();
  }, []);
  
  return (
    <div>
      <HeaderComponent imageIcon={logo} titleHeader='Capacitaciones' />
      <div className="container-training">
        {
          training.map((item) => {
            return <CardTraining key={item.id} id={item.id} imgURL={item.imgURL} title={item.name} time={item.date} />;
          }
          )
        }
      </div>
    </div>
  )
}

export default TrainingsContainer;
