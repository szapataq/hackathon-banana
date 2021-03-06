import React, { useState, useEffect } from "react";
import CommunityCard from "../components/CommunityCard";
import { getInfoUser } from "../API/chat";
import { auth } from "../firebase";
import "./profileContainer.scss";
 

function ProfileContainer() {
  const [userCurrent, setUserCurrent] = useState([]);

  	const signOut = () => auth.signOut();

	const user = auth.currentUser.uid;
	useEffect(() => {
		getInfoUser(user).then((c) => setUserCurrent(c));
	}, []);
	// console.log(userCurrent.nameCompany)
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
					<button onClick={signOut}>Cerrar Sesion</button> 
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
			<CommunityCard />
		</>
	)
}

export default ProfileContainer;
