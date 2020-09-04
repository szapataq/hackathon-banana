import { firestore } from '../firebase';


export const getAllChats = (id) => {
	return firestore.collection("chats").where("IDAddressee", "==", id).get()
		.then((docs) => {
			const ids = [];
			docs.forEach((doc) => {
				ids.push(doc.data().IDReceiver)
			});
			return ids
		})
		.catch((e) => console.log(e))
}

export const getAChat = (idReceptor) => {
	firestore.collection("chats").where("IDReceptor", "==", idReceptor).get()
		.then((doc) => {
			return doc[0].data()
		})
}

export const getInfoUser = (id) => {
	return firestore.collection("user").where("id", "==", id).get().then((users) => {
		let userInfo;
		users.forEach((user) => {
			userInfo = user.data();
		})
		return userInfo;
	})
}