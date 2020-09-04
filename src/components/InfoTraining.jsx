import React, { useState, useEffect } from 'react'
import Button from './Button'
import logo from '../assets/icons/logo.svg';
import HeaderComponent from './HeaderComponent';
import './infoTraining.scss';
import { useParams } from "react-router-dom";
import { firestore } from './../firebase';

const Infodivaining = () => {
  let { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getDataTraining = async () => {
      try {
        const data = await firestore.collection('trainings').get();
        const arrayData = await data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        arrayData.forEach((item) => {
          if (item.id === id) {
            setUser(item);
          }
        })

      } catch (error) {

      }
    };
    getDataTraining();
  }, []);

  
  return (
    <>
      <HeaderComponent imageIcon={logo} titleHeader='Capacitaciones' />
      <div className="container-info">
        <div className="info-title">
          <div className="img-training"><img src={user.imgURL} alt="" /></div>
          <p>{user.name}</p>
        </div>
        <div className="info-details">
          <div className="info-row">
            <div className="first-colum">Fecha</div>
            <div className="second-colum">{user.date}</div>
          </div>
          <div className="info-row">
            <div className="first-colum">Hora</div>
            <div className="second-colum">{user.hour}</div>
          </div>
          <div className="info-row">
            <div className="first-colum">Tema</div>
            <div className="second-colum">{user.description}</div>
          </div>
        </div>
        <Button className='btn-zoom'>
          <a className="link-a" href={user.link}>Unirme al grupo</a>
        </Button>
      </div>
    </>
  )
}

export default Infodivaining;
