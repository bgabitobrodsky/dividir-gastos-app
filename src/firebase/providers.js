import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signinWithGoogle = async () => {
	try {
		const result = await signInWithPopup( FirebaseAuth, googleProvider );

		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName, email, photoURL, uid
		}
		
	} catch ( e ) {

		const errorMessage = e.message;

		console.log( e )

		return {
			ok: false,
			errorMessage
		}
	}
}

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
}