import React, { useState, useEffect } from 'react';
import { getAllChats, getInfoUser } from '../API/chat';
import { Link } from 'react-router-dom';
import './Chat.scss'
import { auth } from '../firebase';


const BoxChat = () => {

	const user = auth.currentUser.uid;
	const [infoUsers, setInfoUsers] = useState([]);
	
	const getChats = async () => await getAllChats(user);
	useEffect(() => {
		getChats().then((ids) => {
			const promises = ids.map((id) => {
				return getInfoUser(id)
			})
			return Promise.all(promises)
		}).then((r) => setInfoUsers(r))
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


