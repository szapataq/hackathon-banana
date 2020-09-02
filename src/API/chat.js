import { firestore, auth } from '../firebase';


export const getAllChats = (id) => {
	firestore.collection("chats").where("IDAddressee", "==", id).get()
		.then((doc) => {
			doc.forEach((doc) => {
				//Extrae 
				console.log(doc.data())
			});
		})
}

export const getAChat = (idReceptor) => {
	firestore.collection("chats").where("IDReceptor", "==", idReceptor).get()
		.then((doc) => {
			return doc.data
		})
}