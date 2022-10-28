// Import the functions you need from the SDKs you need
import { initializeApp, firestore } from 'firebase/app';
import {
	getFirestore,
	collection,
	getDocks,
	getDocs,
	setDoc,
	doc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAylV3hH5bf_FZD_BKsxE23jv9Vp0_DhwI',
	authDomain: 'topped-off.firebaseapp.com',
	projectId: 'topped-off',
	storageBucket: 'topped-off.appspot.com',
	messagingSenderId: '675845181423',
	appId: '1:675845181423:web:88a2248c0863803b3ef01a',
	measurementId: 'G-S9X82SNH01',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// connection ref
const colRef = collection(db, 'cards');

// get collection data
export const tester = (card) => {
	getDocs(colRef).then((snapshot) => {
		snapshot.docs.forEach((doc) => {
			console.log({ ...doc.data(), id: doc.id });
		});
		console.log(snapshot.docs);
	});
};

// Add a new document in collection "cities"
export const sendGame = (data) => {
	setDoc(
		doc(db, 'analytics', `${Math.floor(Math.random() * 1000000 + 1)}`),
		data
	);
};
