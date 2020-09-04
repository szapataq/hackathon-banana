import React, { useState, useEffect } from 'react';
import { getAllMessages, searchMessages } from '../API/message';
import './Message.scss'
import { auth } from '../firebase';

const Mesagge = () => {

	const user = auth.currentUser.uid;
	const idReceiver = "sPQSWWtl1wdpveD83beK2RjomPF2";
	const [allMessages, setAllMessages] = useState([])
	const getMessages = async () => await getAllMessages(user, idReceiver);
	useEffect(() => {
		getMessages().then((messages) => {
			const promises = messages.map((objChat) => {
				if (objChat.IDReceiver === objChat.queryReceiver) {
					return searchMessages(objChat.IDChat)
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