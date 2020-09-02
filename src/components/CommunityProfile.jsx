import React from 'react';
import './CommunityProfile.scss'

const CommunityProfile = ({ name, urlProfile, urlBackground, description }) => {
	return (
		<div className="cm-profile">
			<img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg" 
			alt="Not available" className="background-picture"/>
			<img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg" 
			className="profile-picture" alt="Not available" />
			<div className="items">
				<p className="name">Textiles Camilo</p>
				<p className="city">Lima</p>
				<p className="description">Esta es una descripcion breve del emprendedor</p>
			</div>
		</div>);
}

export default CommunityProfile;