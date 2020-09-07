
import { firestore, auth } from '../firebase';
import * as firebase from 'firebase/app';

//------------------ENVIAR MENSAJE Y GUARDAR EN COLECCION----------------

const updateMessage = (active, receptor, txt) => {
	firestore
		.collection("chats").doc(`${active}_${receptor}`).update({
			messages: firebase.firestore.FieldValue.arrayUnion({
				uid: active,
				date: new Date().getHours() + ":" + new Date().getMinutes(),
				message: txt
			})
		});
}

const updateMessage2 = (active, receptor, txt) => {
	firestore
		.collection("chats").doc(`${active}_${receptor}`).update({
			messages: firebase.firestore.FieldValue.arrayUnion({
				uid: receptor,
				date: new Date().getHours() + ":" + new Date().getMinutes(),
				message: txt
			})
		});
}


const addMessage = (active, receptor, txt) => {
	firestore
		.collection("chats").doc(`${active}_${receptor}`)
		.set({
			IDChat: `${active}_${receptor}`,
			messages: [{
				uid: active,
				date: new Date().getHours() + ":" + new Date().getMinutes(),
				message: txt
			}]
		});
}


export const newMessage = (uid, IDReceiver, txt) => {
	firestore.collection("chats").where("IDChat", "in", [`${uid}_${IDReceiver}`, `${IDReceiver}_${uid}`])
		.get().then((query) => {
			if (!query.empty) {
				firestore.collection("chats").doc(`${uid}_${IDReceiver}`).get().then((doc) => {
					//Si existe
					console.log(doc.exists)
					if (doc.exists) {
						console.log("Primer")
						updateMessage(uid, IDReceiver, txt)
					} else {
						console.log("Segundo")
						updateMessage2(IDReceiver, uid, txt)
					}
				})
			} else {
				addMessage(uid, IDReceiver, txt)
			}
		}).catch((r) => console.log(r))
};

//------------------- CADA COMPONENTE MENSAJE------------------

//------------Esta funcion busca los mensajes en el chat-----------
export const searchMessages = (uid, IDReceiver) => {
	return firestore.collection("chats").where("IDChat", "in", [`${uid}_${IDReceiver}`, `${IDReceiver}_${uid}`])
		.get()
		.then((queryMessages) => {
			const messages = [];
			queryMessages.forEach((doc) => {
				messages.push(doc.data().messages)
			});
			return messages
		})
}