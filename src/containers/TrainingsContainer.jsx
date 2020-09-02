import React, { useEffect, useState }from 'react';
// import Header from '../components/Header'
import HeaderComponent from '../components/HeaderComponent';
import logo from '../assets/icons/logo.svg';
import './trainingsContainer.scss';
import CardTraining from '../components/CardTraining';
import {firebase} from './../firebase';

function TrainingsContainer() {

  const [training, setTraining] = useState([]);

  useEffect(() => {
    const getDataTraining = async() => {
      try {
        const db = firebase.firestore();
        const data = await db.collection('trainings').get();
        const arrayData = data.docs.map(doc => ({id:doc.id, ...doc.data()}))
        console.log(arrayData);
        setTraining(arrayData);

      } catch (error) {
        
      }
    };
    getDataTraining();
  }, []);

  return (
    <div>
      <HeaderComponent imageIcon={logo} titleHeader='Capacitaciones'>
      </HeaderComponent>
      <div className="container-training">
      { 
        training.map((item) =>{
          return <CardTraining key={item.id} imgURL={item.imgURL} title={item.name} time={item.time.date}/>;
        }
        )
      }
      </div>
    </div>
  )
}

export default TrainingsContainer;
