
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

export const getAllMessages = (id) => {
	firestore.collection("chats").where("Usuarioactivo", "==", id)
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.data())
			});
		})
}







//



//banana.web/chat/aoiquoiruweoiru
