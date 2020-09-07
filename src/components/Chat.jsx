import React, { useState, useEffect } from 'react';
import { getAllChats, getInfoUser } from '../API/chat';
import { Link } from 'react-router-dom';
import './Chat.scss'
import { auth } from '../firebase';


const BoxChat = () => {

	const userActive = auth.currentUser.uid;
	const [infoUsers, setInfoUsers] = useState([]);
	const getChats = async () => await getAllChats();
	useEffect(() => {
		getChats().then((chats) => {
			const idsPerVerificate = chats.map((id) => { return (id.IDChat.split("_")) });
			const idsToShow = [];
			idsPerVerificate.forEach((obj) => {
				if (obj[0] === userActive || obj[1] === userActive) {
					obj.forEach((id) => {
						if (id !== userActive) idsToShow.push(id);
					})
				}
			})
			const promises = idsToShow.map((id) => {
				return getInfoUser(id).then((doc) => {
					return {
						id: id,
						photoUserUrl: doc.photoUserUrl,
						nameCompany: doc.nameCompany,
						ubication: doc.ubication
					}
				})
			})
			return Promise.all(promises)
		}).then((arrUser) => setInfoUsers(arrUser))
	}, []);

	return (
		<div className="box-chat">
			{infoUsers.map((user, key) => {
				return (
					<Link to={`/chat/${user.id}`}>
						<div key={key} className="user-chat">
							<img src={user.photoUserUrl} alt="Not available" className="img-chat"></img>
							<div>
								<p className="name-company">{user.nameCompany}</p>
								<p className="ubication">{user.ubication}</p>
							</div>
						</div>
					</Link>
				)
			})}
		</div>);
}

export default BoxChat;


