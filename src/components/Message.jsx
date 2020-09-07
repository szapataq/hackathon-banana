import React, { useState, useEffect } from "react";
import { searchMessages } from "../API/message";
import "./Message.scss";
import { auth } from "../firebase";
import { useParams } from "react-router-dom";

const Mesagge = () => {
	const user = auth.currentUser.uid;
	let { id: idReceiver } = useParams();
	const [allMessages, setAllMessages] = useState([]);
	const getMessages = async () => await searchMessages(user, idReceiver);

	useEffect(() => {
		getMessages().then((messages) => {
			if (messages.length === 0) {
				setAllMessages([
					{
						message: "Bienvenid@ a un nuevo chat",
						date: "",
					},
				]);
			} else {
				setAllMessages(messages[0]);
			}
		});
	}, []);

	return (
		<div className="message-content">
			{allMessages.map((element, id) => {
				if (element.uid === user) {
					return (
						<div key={id} className="message-currentuser">
							<p>{element.message}</p>
							<p>{element.date}</p>
						</div>
					);
				}
				if (element.uid === idReceiver) {
					return (
						<div key={id} className="message-receiver">
							<p>{element.message}</p>
							<p>{element.date}</p>
						</div>
					);
				}
				if (element.uid === undefined) {
					return (
						<div key={id} className="message">
							<p>{element.message}</p>
						</div>
					);
				}
			})}
		</div>
	);
};

export default Mesagge;
