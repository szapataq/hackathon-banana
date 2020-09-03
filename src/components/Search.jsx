import React from 'react';
import './search.scss';
import search from '../assets/icons/searchIcon.svg';

const Search = () => {
	return ( 
		<div className="search">
			<img src={search} alt="Lupa"></img>
			<input type="text" placeholder="Busca un emprendimiento"/>
		</div>
	 );
}
export default Search;