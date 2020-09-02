import { firestore, auth } from '../firebase';
import React from 'react';


export const getAllChats = (id) => {
	return firestore.collection("chats").where("IDAddressee", "==", id).get()
		.then((doc) => {
			const chats = [];
			doc.forEach((doc) => {
				chats.push(doc.data())
			});
			return chats
		})
		.catch((e) => console.log(e))
}



export const getAChat = (idReceptor) => {
	firestore.collection("chats").where("IDReceptor", "==", idReceptor).get()
		.then((doc) => {
			return doc.data
		})
}