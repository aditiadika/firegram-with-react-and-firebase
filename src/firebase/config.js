import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyB-MYTPiX1YR_4AY6S0jtF6eg9MVaFcjdk',
	authDomain: 'dika-firegram.firebaseapp.com',
	databaseURL: 'https://dika-firegram.firebaseio.com',
	projectId: 'dika-firegram',
	storageBucket: 'dika-firegram.appspot.com',
	messagingSenderId: '952586400666',
	appId: '1:952586400666:web:fd569e0c911db630e48023'
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
