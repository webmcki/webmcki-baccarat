import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBFygKUqMMKsP25Xj-12VVNYYs39FnTFq0',
  authDomain: 'webmcki-baccarat-535f2.firebaseapp.com',
  databaseURL: 'https://webmcki-baccarat-535f2.firebaseio.com',
  projectId: 'webmcki-baccarat-535f2',
  storageBucket: 'webmcki-baccarat-535f2.appspot.com',
  messagingSenderId: '847640659435',
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
