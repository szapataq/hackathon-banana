
import { firestore, auth } from '../firebase';

//------------------ENVIAR MENSAJE Y GUARDAR EN COLECCION----------------

export const newMessage = (txt) => {
	const user = auth.currentUser;
	console.log(user)
	firestore
		.collection("chats")
		.add({
			IDAddressee: user.uid,
			IDReceiver: user.uid,
			message: {
				user: user.uid,
				date: new Date(),
				message: txt
			}
		});
};


//------------------- CADA COMPONENTE MENSAJE------------------


export const searchMessages = (idDoc) => {
	return firestore.collection("chats").doc(idDoc).collection("message").orderBy("date")
		.get()
		.then((queryMessages) => {
			let chats = [];
			queryMessages.forEach((doc) => {
				chats.push(doc.data());

			});
			return chats
		})
}

export const getAllMessages = (idActive, queryReceiver) => {
	return firestore.collection("chats").where("IDAddressee", "==", idActive).get().then((chats) => {
		const chatsInfo = [];
		chats.forEach((doc) => {
			const idChat = doc.data().id;
			const IDReceiver = doc.data().IDReceiver;
			chatsInfo.push({ idChat: idChat, IDReceiver: IDReceiver, queryReceiver: queryReceiver })
		});
		return chatsInfo
	})
		.catch((e) => console.log(e))
}


// .then((chatsInfo) => {
// 	chatsInfo.forEach((objChat) => {
// 		if (objChat.IDReceiver === objChat.queryReceiver) {
// 			searchMessages(objChat.idChat)
// 		} else { console.log("No es el chat del usuario activo y el receptor") }
// 	})
// })


