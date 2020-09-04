import { auth } from '../firebase'

export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
}