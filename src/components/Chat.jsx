import React from 'react';
import { getAllChats } from '../API/chat';
import { auth } from '../firebase';


const Chat = () => {
	const user = "prueba";
	return (
		<>
			{getAllChats(user)}
		</>
	);
}

export default Chat;