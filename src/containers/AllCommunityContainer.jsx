import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import logo from '../assets/icons/logo.svg';
import search from '../assets/icons/searchIcon.svg';
import './allCommunityContainer.scss';

const AllCommunityContainer = () => {
    return (
        <>
            <HeaderComponent imageIcon={logo} titleHeader='Comunidad'>
            </HeaderComponent>
            <div className="all-container">
                <div className="search-community">
                    <img src={search} alt=""/>
                    <input type="text" placeholder="Busca un emprendimiento"/>
                </div>
                <div className="container-community-card">
                    <div className="card-commu">
                        <figure className="img-company"><img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/ac/5a/4f/te-bienestar-acompanado.jpg" alt=""/></figure>
                        <div className="content-company">
                            <div>
                                <p>Textiles Camilo</p>
                                <span>Lima</span>
                            </div>
                            <button>Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AllCommunityContainer
