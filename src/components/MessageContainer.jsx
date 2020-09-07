import React, { useState } from 'react';
import InputBt from './InputBt';
import Message from './Message';
import { auth } from '../firebase';
import { newMessage } from '../API/message';
import { useParams } from 'react-router-dom';
import './MessageContainer.scss'

const MessageContainer = () => {
	const [ messageToSend, setMessageToSend] = useState("");
	let { id:idReceiver } = useParams();
	const captureText = (e) => {
		setMessageToSend(e.target.value)
	}
	const sendMessage = (e) => {
		e.preventDefault()
		const user = auth.currentUser.uid;
		newMessage(user, idReceiver, messageToSend)
	}
	return ( 
		<div className="message-container">
			<Message />
			<InputBt onChange={captureText} onClick={sendMessage} value={messageToSend} className="input-chat" placeholder="Escribe un mensaje"/>
		</div>
	 );
}
 
export default MessageContainer;