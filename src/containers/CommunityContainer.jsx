import React from 'react';
import CommunityCard from '../components/CommunityCard';
import CommunityProfile from '../components/CommunityProfile';
import Button from '../components/Button'

function CommunityContainer() {
	return (
		<>
			<CommunityProfile />
			<Button className="bt-entrepreneur">Contactar al emprendedor</Button>
			<section className="products">
				<CommunityCard />
			</section>
		</>
	)
}

export default CommunityContainer;
