import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyCVJbhIhF5ZKvOB2oWARPwutOUmh4LK2KA',
	authDomain: 'crown-fashion-12797.firebaseapp.com',
	projectId: 'crown-fashion-12797',
	storageBucket: 'crown-fashion-12797.appspot.com',
	messagingSenderId: '432315882725',
	appId: '1:432315882725:web:e0f4bf32ad806588f8080c',
	measurementId: 'G-ZDYKD5L7F2'
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`user/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('problem in Createing user', error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
