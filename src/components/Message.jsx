import React, { useState, useEffect } from 'react';
import { getAllMessages, searchMessages } from '../API/message';
import './Message.scss'
import { auth } from '../firebase';
import { useParams } from 'react-router-dom';

const Mesagge = () => {

	const user = auth.currentUser.uid;
	let { id:idReceiver }= useParams();
	const [allMessages, setAllMessages] = useState([])
	const getMessages = async () => await getAllMessages(user, idReceiver);

	useEffect(() => {
		getMessages().then((chatInfo) => {
			console.log(chatInfo)
			if (chatInfo === []) {
				return []
			} else {
				const promises = chatInfo.map((objChat) => {
					if (objChat.IDReceiver === objChat.queryReceiver) {
						return searchMessages(objChat.IDChat)
					}
				})
				return Promise.all(promises)
			}
		}).then((messages) => {
			if (messages.length === 0) {
				setAllMessages([{
					message: "Bienvenid@ a un nuevo chat",
					date: ""
				}])
			} else {
				setAllMessages(messages[0][0])
			}
		})
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