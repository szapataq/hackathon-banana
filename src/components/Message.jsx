import React, { useState, useEffect } from 'react';
import { getAllMessages, searchMessages } from '../API/message';
import './Message.scss'

const Mesagge = () => {

	const user = "prueba"
	const idReceiverPrueba = "uufNvionfX5T107kMQEN";
	const [allMessages, setAllMessages] = useState([])
	const getMessages = async () => await getAllMessages(user, idReceiverPrueba);
	useEffect(() => {
		getMessages().then((messages) => {
			const promises = messages.map((objChat) => {
				if (objChat.IDReceiver === objChat.queryReceiver) {
					return searchMessages(objChat.idChat)
				}
			})
			return Promise.all(promises)
		}).then((messages) => setAllMessages(messages[0]))
	}, []);

	return (
		<div className="message-content">
			{allMessages.map((element, id) => {
				return (<div key={id} className="message">
					<p>{element.message}</p>
					<p>{element.date}</p>
				</div>)
			})}
		</div>
	);
}

export default Mesagge;