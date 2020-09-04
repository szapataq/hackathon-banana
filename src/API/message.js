
import { firestore, auth } from '../firebase';
import * as firebase from 'firebase/app';

//------------------ENVIAR MENSAJE Y GUARDAR EN COLECCION----------------

export const newMessage = (uid, txt) => {
	//Introducir el mensaje en el objeto del documento chats y no crear un nuevo documento
	//Reemplazar ID RECEIVER

	firestore.collection("chats").where("IDChat", "==", uid)
		.get().then((query) => {
			if (!query.empty) {
				firestore
					.collection("chats").doc(`chat-${uid}`).update({
					messages: firebase.firestore.FieldValue.arrayUnion({
						uid: uid,
						date: new Date().getHours() + ":" + new Date().getMinutes(),
						message: txt
					})
				});
			} else {
				firestore
					.collection("chats").doc(`chat-${uid}`)
					.set({
						IDAddressee: uid,
						IDReceiver: uid,
						IDChat: uid,
						messages: [{
							uid: uid,
							date: new Date().getHours() + ":" + new Date().getMinutes(),
							message: txt
						}]
					});
			}
		}).catch((r) => console.log(r))
};



//------------------- CADA COMPONENTE MENSAJE------------------

//------------Esta funcion busca los mensajes en el chat-----------
export const searchMessages = (IDChat) => {
	return firestore.collection("chats").where("IDChat", "==", IDChat)
		// .get()
		.onSnapshot((queryMessages) => {
			const messages = [];
			queryMessages.forEach((doc) => {
				messages.push(doc.data().messages)
			});
			console.log(messages)
			return messages
		})
}

export const getAllMessages = (idUserActive, queryReceiver) => {
	return firestore.collection("chats").where("IDAddressee", "==", idUserActive).get().then((chats) => {
		const chatsInfo = [];
		chats.forEach((doc) => {
			const idChat = idUserActive;
			const IDReceiver = doc.data().IDReceiver;
			chatsInfo.push({ IDChat: idChat, IDReceiver: IDReceiver, queryReceiver: queryReceiver })
		}
		);
		return chatsInfo
	})
		.catch((e) => console.log(e))
}

//-----Esta funcion obtiene informacion de los chats del usuario activo------

// export const getAllMessages = (idUserActive, queryReceiver) => {
// 	return firestore.collection("chats").where("IDAddressee", "==", idUserActive).onSnapshot((chats) => {
// 			const chatsInfo = [];
// 			chats.forEach((doc) => {
// 				const idChat = idUserActive;
// 				const IDReceiver = doc.data().IDReceiver;
// 				chatsInfo.push({ IDChat: idChat, IDReceiver: IDReceiver, queryReceiver: queryReceiver })
// 			});
// 			console.log(chatsInfo)
// 			return(chatsInfo)
// 	})
// }