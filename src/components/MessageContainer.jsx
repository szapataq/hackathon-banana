import React, { useState } from 'react';
import InputBt from './InputBt';
import Message from './Message';
import { auth } from '../firebase';

const MessageContainer = () => {
	const [ messageToSend, setMessageToSend] = useState("");
	const captureText = (e) => {
		setMessageToSend(e.target.value)
	}
	const sendMessage = (e) => {
		e.preventDefault()
		const user = auth.currentUser.uid;
		//Aqui ejecutar la funcion que envia el mensaje
	}
	return ( 
		<div className="message-container">
			<Message />
			<InputBt onChange={captureText} onClick={sendMessage} value={messageToSend} className="input-chat" placeholder="Escribe un mensaje"/>
		</div>
	 );
}
 
export default MessageContainer;