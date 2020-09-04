import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.svg';
import search from '../assets/icons/searchIcon.svg';
import './allCommunityContainer.scss';
import Button from '../components/Button'
// import { firestore } from './../firebase';
import { getAllUser } from '../API/chat';


const AllCommunityContainer = () => {

    const [cardCommunity, setCardCommunity] = useState([])

    useEffect(() => {
        getAllUser().then((r) => setCardCommunity(r))
    }, [])

    return (
        <>
            <HeaderComponent imageIcon={logo} titleHeader='Comunidad'>
            </HeaderComponent>
            <div className="all-container">
                <div className="search-community">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Busca un emprendimiento" />
                </div>
                <div className="container-community-card">
                    {
                        cardCommunity.map((user) => {
                            return <div className="card-commu" key={user.id}>
                                        <figure className="img-company">
                                            <img src={user.photoCompanyUrl} alt="" />
                                        </figure>
                                        <div className="content-company">
                                            <div>
                                                <p>{user.nameCompany}</p>
                                            <span>{user.ubication}</span>
                                        </div>
                                    <Link to={`/community/${user.id}`}>
                                        <Button className='bt-seemore'>Ver más</Button>
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default AllCommunityContainer
