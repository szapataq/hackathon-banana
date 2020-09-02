import React from 'react';
import './BoxChats.scss'
import { getAllMessages } from '../API/message';
import { getAllChats } from '../API/chat';
import { auth } from '../firebase';

const BoxChats = () => {
	const user = auth.currentUser;
	return (
		<div className="chats-container">
		{getAllChats(user.id)}
		</div>
	);
}
 
export default BoxChats;