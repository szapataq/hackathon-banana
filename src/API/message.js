
import { firestore, auth } from '../firebase';

//------------------ENVIAR MENSAJE Y GUARDAR EN COLECCION----------------

export const newMessage = (uid, txt) => {
	firestore
		.collection("chats")
		.add({
			IDAddressee: uid,
			IDReceiver: uid,
			IDChat: uid,
			messages: {
				uid: uid,
				date: new Date().getHours() + ":" + new Date().getMinutes(),
				message: txt
			}
		});
};


//------------------- CADA COMPONENTE MENSAJE------------------

//------------Esta funcion busca los mensajes en el chat-----------
export const searchMessages = (IDChat) => {
	return firestore.collection("chats").where("IDChat", "==", IDChat)
		.get()
		.then((queryMessages) => {
			const messages = [];
			queryMessages.forEach((doc) => {
				messages.push(doc.data().messages)
			});
			return messages
		})
}

//-----Esta funcion obtiene informacion de los chats del usuario activo------

export const getAllMessages = (idUserActive, queryReceiver) => {
	return firestore.collection("chats").where("IDAddressee", "==", idUserActive).get().then((chats) => {
		const chatsInfo = [];
		chats.forEach((doc) => {
			const idChat = idUserActive;
			const IDReceiver = doc.data().IDReceiver;
			chatsInfo.push({ IDChat: idChat, IDReceiver: IDReceiver, queryReceiver: queryReceiver })
		});
		return chatsInfo
	})
		.catch((e) => console.log(e))
}


