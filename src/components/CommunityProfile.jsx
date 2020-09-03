import React from 'react';
import './CommunityProfile.scss'

const CommunityProfile = ({ name, urlProfile, urlBackground, description }) => {
	return (
		<div className="cm-profile">
			<div className="background-picture">
				<img src="https://isic.pe/wp-content/uploads/2020/02/MUNANQUI3-e1580855852832.jpg" 
				alt="Not available" />
			</div>
			<img src="https://ucsp.edu.pe/wp-content/uploads/2020/03/logo-munanqui.jpg" 
			className="profile-picture" alt="Not available" />
			<div className="items">
				<p className="name">Textiles Camilo</p>
				<p className="city">Lima</p>
				<div className="container-description">
					<p className="description">Esta es una descripcion breve del emprendedor</p>
				</div>
			</div>
			<p className="title-prod">Muestra tu trabajo</p>
			<div className="container-products">

			</div>
		</div>
	);
}

export default CommunityProfile;