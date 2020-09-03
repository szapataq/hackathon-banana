import { auth } from '../firebase'

export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
  //     .then((userLogin) => {
  //       console.log(userLogin);
  //       // window.location.hash = '#/home'
  //     })
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       console.log(`${errorCode}No hay registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado.`);
  //       var errorMessage = error.message;
  //       // [START_EXCLUDE]
  //       if (errorCode == 'auth/weak-password') {
  //         alert('The password is too weak.');
  //       } else {
  //         alert(errorMessage);
  //       }
  //       console.log(error);
  //       // [END_EXCLUDE]
  //     });
}