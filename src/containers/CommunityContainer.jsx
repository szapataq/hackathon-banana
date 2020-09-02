import React from 'react'
import CommunityCard from '../components/CommunityCard'
import CommunityProfile from '../components/CommunityProfile'

function CommunityContainer() {
	return (
		<>
			<CommunityProfile />
			<button class="bt-entrepreneur">Contactar al emprendedor</button>
			<section className="products">
				<CommunityCard />
			</section>
		</>
	)
}

export default CommunityContainer;
