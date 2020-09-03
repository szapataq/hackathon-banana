import React from 'react'
import Button from './Button'
import logo from '../assets/icons/logo.svg';
import HeaderComponent from './HeaderComponent';
import './infoTraining.scss';


function Infodivaining() {
  return (
    <>
      <HeaderComponent imageIcon={logo} titleHeader='Capacitaciones' />
      <div className="container-info">
        <div className="info-title">
          <div class="img-training"><img src="https://i.pinimg.com/originals/8b/d6/1f/8bd61f64ebe510569969f46d14e9e19f.jpg" alt=""/></div>
          <p>Aprende a usar el chat emprendedor</p>
        </div>
        <div className="info-details">
          <div className="info-row">
            <div className="first-colum">Fecha</div>
            <div className="second-colum"> Viernes 12/20</div>
          </div>
          <div className="info-row">
            <div className="first-colum">Hora </div>
            <div className="second-colum">08:00 pm</div>
          </div>
          <div className="info-row">
            <div className="first-colum">Tema</div>
            <div className="second-colum">Aprende a usar el chat para conectar con odivos emprendedores, conocer sus emprendimientos .</div>
          </div>
        </div>
      <Button className='btn-zoom'>
         <a className="link-a" href="https://chat.whatsapp.com/EVaX6zJyshb11WfX3byLaV">Unirme al grupo</a>
      </Button>
      </div>
    </>
  )
}

export default Infodivaining;
