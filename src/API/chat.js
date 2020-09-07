import { firestore } from '../firebase';


export const getAllChats = () => {
	return firestore.collection("chats").get()
		.then((docs) => {
			const chats = [];
			docs.forEach((doc) => {
				chats.push(doc.data())
			});
			return chats
		})
		.catch((e) => console.log(e))
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

export const getAllUser = () => {
	return firestore.collection("user").get()
		.then((docusers) => {
			let arrUser = []
			docusers.forEach(user => arrUser.push(user.data()))
			return arrUser;
		});
}
