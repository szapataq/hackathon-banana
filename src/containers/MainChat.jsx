import React, { useState, useEffect } from 'react';
import HeaderComponent from "../components/HeaderComponent";
import { getAllChats, getInfoUser } from '../API/chat';
import MessageContainer from "../components/MessageContainer";
import { auth } from '../firebase';
import { useParams } from "react-router-dom";

function MainChat() {

	const userActive = auth.currentUser.uid;
	let { id: idReceiver } = useParams();
	const [infoUsers, setInfoUsers] = useState([]);
	const getChats = async () => await getAllChats();
	useEffect(() => {
		getChats().then((chats) => {
			const idsPerVerificate = chats.map((id) => { return (id.IDChat.split("_")) });
			const idsToShow = [];
			idsPerVerificate.forEach((obj) => {
				obj.forEach((id) => {
					if (id !== userActive && id === idReceiver) idsToShow.push(id);
				})
			})
			const promises = idsToShow.map((id) => {
				return getInfoUser(id).then((doc) => {
					return {
						photoUserUrl: doc.photoUserUrl,
						nameCompany: doc.nameCompany,
					}
				})
			})
			return Promise.all(promises)
		}).then((arrUser) => {
			setInfoUsers(arrUser[0])})
	}, []);
	return (
		<div>
			<HeaderComponent titleHeader={infoUsers.nameCompany} imageIcon={infoUsers.photoUserUrl} />
			<MessageContainer />
		</div>
	);
}

export default MainChat;

// imageIcon={a} titleHeader={a}
