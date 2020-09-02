import React from 'react';
import './ComunityCard.scss';

const CommunityCard = ({price, imgProduct}) => {
	return ( 
		<div className="card">
			<img src={imgProduct} alt="Not available"></img>
			<p>Producto</p>
			<p>{price}</p>
		</div>
	 );
}
 
export default CommunityCard;