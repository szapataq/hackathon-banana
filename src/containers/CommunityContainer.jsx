import React, { useState, useEffect } from 'react';
import CommunityCard from '../components/CommunityCard';
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { firestore } from './../firebase';
import { useParams } from "react-router-dom";
import './communityContainer.scss'




function CommunityContainer() {

	let { id } = useParams();

	const [userCurrent, setUserCurrent] = useState([]);

	// const user = auth.currentUser.uid;
	useEffect(() => {
		const getProfileCompany = async () => {
			try {
				const data = await firestore.collection('user').get();
				const arrayData = await data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
				arrayData.forEach((item) => {
					if (item.id === id) {
						setUserCurrent(item);
					}
				})

			} catch (error) {

			}
		};
		getProfileCompany();
	}, []);

	return (
		<>
			<div className="cm-profile">
				<div className="background-picture">
					<img src={userCurrent.photoCompanyUrl}
						alt="Not available" />
				</div>
				<img src={userCurrent.photoUserUrl}
					className="profile-picture" alt="Not available" />
				<div className="items">
					<p className="name">{userCurrent.nameCompany}</p>
					<p className="city">{userCurrent.ubication}</p>
					<div className="container-description">
						<p className="description">{userCurrent.descriptionCompany}</p>
					</div>
				</div>
				<p className="title-prod">Muestra tu trabajo</p>
				<div className="container-products">

				</div>
			</div>
			<Link to={`/chat/${userCurrent.id}`}>
				<Button className="bt-entrepreneur">
					Contactar al emprendedor
				</Button>
			</Link>
			<section className="products">
				<CommunityCard />
			</section>
		</>
	)
}

export default CommunityContainer;
