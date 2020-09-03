import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import { getAllChats } from '../API/chat';
// import { auth } from '../firebase';
import './Chat.scss'


const Chat = () => {
	const user = "prueba";
	const [chat, setChat] = useState([]);
	const getChats = async () => await getAllChats(user);
	useEffect(() => {
		getChats().then((response) => setChat(response))
	}, []);
	return (
		// <Link>
		<div className='content-Chat'>
			{chat.map((chat, id) => {
				return (<div key={id}>
					<p>{chat.IDReceptor}</p>
				</div>)
			})}
		</div>
		// </Link>
	);
}

export default Chat;